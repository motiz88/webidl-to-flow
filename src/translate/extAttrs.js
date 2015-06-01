/* @flow */

import Rx from 'rx';
import emitExtAttr from '../emit/extAttr';
import t from '../FormattingToken';
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

    return literal(t.enterComment, '[')
        .concat(Rx.Observable.from(node)
            .concatMap(subnode =>
                Rx.Observable.concat(emitExtAttr(subnode), literal(', '))
            ).skipLast(1),
            literal(']', t.exitComment)
        );
}