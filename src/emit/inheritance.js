/* @flow */

import translateType from '../translate/type';
import Rx from 'rx';

var literal = Rx.Observable.of;

export
default

function emitInheritance(node: {
    inheritance: ? (IdlType | string)
}): Rx.Observable {
    if (!node.inheritance)
        return Rx.Observable.empty();
    else
        return Rx.Observable.concat(
            literal('extends '),
            translateType(node.inheritance)
        );
}