/* @flow */

import Rx from 'rx';
// import assert from 'assert';

var literal = Rx.Observable.of;

import translateType from '../translate/type';
import translateArguments from '../translate/arguments';


export
default

function emitMethod(node: {
    name ? : string, static ? : boolean, arguments: ? array < IdlArgument >,
    idlType ? : IdlType
}): Rx.Observable {
    return Rx.Observable.concat(
        literal(node.static ? 'static ' : ''),
        literal(node.name ? node.name : ''),
        literal(`(`),
        translateArguments(node.arguments || []),
        literal(`)`),
        literal(node.idlType ? ': ' : ''),
        node.idlType ? translateType(node.idlType) : literal(''),
        literal(';')
    );
}