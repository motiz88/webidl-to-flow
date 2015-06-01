/* @flow */

import Rx from 'rx';
import t from '../FormattingToken';
var literal = Rx.Observable.of;

export
default

function notImplemented(node: {
    type: ? string,
    idlType : ? any,
    name : ? string
}, reason: ? string): Rx.Observable {
    return literal(
        t.enterComment,
        `Not implemented: ${node.type || node.idlType}${node.name ? (' ' + node.name) : ''}${reason ? (' (' + reason + ')') : ''}`,
        t.exitComment
    );
}