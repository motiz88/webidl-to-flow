/* @flow */

import Rx from 'rx';
// import notImplemented from './notImplemented';

var literal = Rx.Observable.of;

import translateType from './type';
import translateArguments from './arguments';

export
default

function translateFunctionType(node: {name: string, idlType: IdlType | string, arguments: Array<IdlArgument>}): Rx.Observable {
    return Rx.Observable.concat(
    	translateArguments(node.arguments, '()'),
    	literal(' => '),
        translateType(node.idlType)
    );
}