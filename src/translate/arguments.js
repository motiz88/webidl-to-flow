/* @flow */

import Rx from 'rx';
import translateArgument from './argument';

var literal = Rx.Observable.of;

export
default

function translateArguments(node: Array<IdlArgument>, enclosed: boolean | string): Rx.Observable {
    var coreArguments = Rx.Observable.from(node)
        .concatMap(subnode => translateArgument(subnode)
            .concat(literal(', ')))
        .skipLast(1);

    if (enclosed && typeof enclosed === 'boolean')
        enclosed = '()';


    if (enclosed)
        return Rx.Observable.concat(
            literal(enclosed[0]),
            coreArguments,
            literal(enclosed[1]));
    else
        return coreArguments;
}