/* @flow */

import translateType from '../translate/type';
import Rx from 'rx';

var literal = Rx.Observable.of;

export
default

function emitField(node: {name: string, idlType: IdlType, static?: boolean}): Rx.Observable {   
    return Rx.Observable.concat(
    	literal(node.static ? 'static ' : ''),
        literal(node.name),
        literal(': '),
        translateType(node.idlType),
        literal(';')
    );
}