/* @flow */

import Rx from 'rx';
// import notImplemented from './notImplemented';

var literal = Rx.Observable.of;

import translateTypeOrFunctionType from '../translate/typeOrFunctionType';

export
default

function emitTypeAlias(node: {
    name: string,
    idlType: IdlType | string,
    arguments ? : Array < IdlArgument >
}): Rx.Observable {
    return Rx.Observable.concat(
        literal(`type ${node.name} = `),
        translateTypeOrFunctionType(node),
        literal(';')
    );
}