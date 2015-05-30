/* @flow */

import assert from 'assert';
import emitField from '../emit/field';
import Rx from 'rx';
import translateExtAttrs from './extAttrs';
import concatIfAny from '../concatIfAny';

var literal = Rx.Observable.of;
import t from '../FormattingToken';

export
default

function translateConstant(node: IdlConstant): Rx.Observable {
    assert(node.type === 'const',
        `Expected IdlConstant, found ${node.type}`);
    if (node.nullable && typeof node.idlType === 'string')
    {
    	node.idlType = {idlType: node.idlType, nullable: true};
    }
    assert.equal(node.nullable, node.idlType.nullable || false, "node.nullable != node.idlType.nullable " + require('util').inspect(node));

    return concatIfAny(translateExtAttrs(node), literal(t.newlineIndent))
        .concat(emitField(node));
}