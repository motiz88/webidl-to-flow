/* @flow */

import Rx from 'rx';
import assert from 'assert';
import emitMembers from './members';
import emitInheritance from './inheritance';
import concatIfAny from '../concatIfAny';
var literal = Rx.Observable.of;
import t from '../FormattingToken';

export
default

function emitClass(node: {
        type: string,
        name: string,
        inheritance: ? (string | IdlType),
        members : Array < any >,
        partial ? : boolean,
        extAttrs ? : Array < IdlExtAttr >,
    },
    nodeMapper: (node: any) => Rx.Observable): Rx.Observable {
    var isNoInterfaceObject = node.extAttrs.some(subnode => subnode.name === 'NoInterfaceObject');
    if (isNoInterfaceObject) {
        assert(!node.inheritance, `Type ${node.name} [NoInterfaceObject] cannot have inheritance information; Should have been purged in preprocessAst`);
        assert(!node.extAttrs.some(subnode => subnode.name === 'Constructor'), `Type ${node.name} has illegal combination: [NoInterfaceObject] and [Constructor]`);
        assert(!node.members.some(subnode => subnode.name === 'constructor'), `Type ${node.name} has illegal combination: [NoInterfaceObject] and constructor`);
    }

    return literal(`/* WebIDL: ${node.partial ? 'partial ' : ''}${node.type} ${node.name} */`)
        .concat(literal(t.newlineIndent))
        .concat(literal(isNoInterfaceObject ? `type ${node.name} = ` : `declare class ${node.name} `))
        .concat(concatIfAny(emitInheritance(node), literal(' ')))
        .concat(literal(t.openBrace))
        .concat(emitMembers(
            Rx.Observable.from(node.members),
            nodeMapper
        ))
        .concat(literal(t.closeBrace), literal(isNoInterfaceObject ? ';' : ''));
}