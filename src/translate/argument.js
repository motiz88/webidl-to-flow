/* @flow */

import Rx from 'rx';
// import assert from 'assert';
import translateType from './type';
import translateExtAttrs from './extAttrs';
import concatIfAny from '../concatIfAny';
var literal = Rx.Observable.of;

export
default

function translateArgument(node: IdlArgument): Rx.Observable {
    return Rx.Observable.concat(
    	concatIfAny(translateExtAttrs(node, ' '), literal(' ')),
        literal(node.variadic ? '...' : ''),
        literal(node.name),
        literal(node.optional ? '? ' : ''),
        literal(': '),
        translateType(node.idlType)
    );
}