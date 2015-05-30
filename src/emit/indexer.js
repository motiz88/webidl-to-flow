/* @flow */

import Rx from 'rx';
// import assert from 'assert';

var literal = Rx.Observable.of;

import translateType from '../translate/type';
import translateArguments from '../translate/arguments';

export
default

function emitIndexer(node: {
    arguments: ? array <IdlArgument>,
    idlType ? : IdlType
}): Rx.Observable {
    return translateArguments(node.arguments, '[]').concat(literal(': '), translateType(node.idlType), literal(';'));
}