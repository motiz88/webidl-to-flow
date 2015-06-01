/* @flow */

import assert from 'assert';
import translateInterfaceMember from './interfaceMember';
import Rx from 'rx';
import emitMembers from '../emit/members';
import unique from 'array-unique';
import translateFunctionType from './functionType';

var literal = Rx.Observable.of;
import t from '../FormattingToken';

export
default

function translateCallbackInterface(node: IdlCallbackInterface): Rx.Observable {
    assert(node.type === 'callback interface',
        `Expected IdlCallbackInterface, found ${node.type}`);
    assert(!node.inheritance, "IdlCallbackInterface should not have inheritance info here (AST should be preprocessed with flattenCallbackInterfaces)");
    var decl = literal(t.enterComment, `WebIDL: ${node.partial ? 'partial ' : ''}${node.type} ${node.name}`,
            t.exitComment,
            t.newlineIndent,
            `type ${node.name} = `,
            t.openBrace
        )
        .concat(emitMembers(
            Rx.Observable.from(node.members),
            translateInterfaceMember
        ))
        .concat(literal(t.closeBrace));

    // Is this a single operation callback interface?
    if (!node.members.some(subnode => subnode.type === 'attribute')) {
        var regops = node.members.filter(subnode => subnode.type === 'operation' && !subnode.static && subnode.name);
        var opname = unique(regops.map(op => op.name));
        if (opname.length === 1) {
            decl = decl.concat(Rx.Observable.from(regops)
                .concatMap(op => literal(' | (').concat(translateFunctionType(op), literal(')')))
            );
        }
    }
    return decl.concat(literal(';'));
}