/* @flow */

import Rx from 'rx';
// import assert from 'assert';
import translateType from './type';
import translateExtAttrs from './extAttrs';
import concatIfAny from '../concatIfAny';
import emitIdentifier from '../emit/identifier';

var literal = Rx.Observable.of;

function wrapInArrayType(idlType) {
	return {array: 1, nullableArray: [false], idlType};
}

export
default

function translateArgument(node: IdlArgument): Rx.Observable {
    return Rx.Observable.concat(
    	concatIfAny(translateExtAttrs(node, ' '), literal(' ')),
        literal(node.variadic ? '...' : ''),
        emitIdentifier(node.name),
        literal(node.optional ? '? ' : ''),
        literal(': '),
        translateType(node.variadic ? wrapInArrayType(node.idlType) : node.idlType)
    );
}
