/* @flow */

// import Rx from 'rx';

import translateType from '../translate/type';
import translateFunctionType from '../translate/functionType';

export
default

function translateTypeOrFunctionType(node: {
    idlType: IdlType | string,
    arguments ? : Array < IdlArgument >
}): Rx.Observable {
    return node.arguments ? translateFunctionType(node) : translateType(node.idlType);
}