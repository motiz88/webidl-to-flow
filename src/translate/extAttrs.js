/* @flow */

import Rx from 'rx';
import emitExtAttr from '../emit/extAttr';
var literal = Rx.Observable.of;

export
default

function translateExtAttrs(node: Array < IdlExtAttr > | {
    extAttrs: Array < IdlExtAttr >
}): Rx.Observable {
    if (node.extAttrs)
        return translateExtAttrs(node.extAttrs);

    if (!node.length)
        return Rx.Observable.empty();

    return literal('/* [')
        .concat(Rx.Observable.from(node)
            .concatMap(subnode =>
                Rx.Observable.concat(emitExtAttr(subnode), literal(', '))
            ).skipLast(1),
            literal('] */')
        );
}