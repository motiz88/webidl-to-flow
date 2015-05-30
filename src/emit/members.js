/* @flow */

import Rx from 'rx';

var literal = Rx.Observable.of;
import t from '../FormattingToken';

export
default

function emitMembers(memberNodes: Rx.Observable, nodeMapper: (node: any) => Rx.Observable): Rx.Observable {
    return memberNodes.concatMap(
        subnode =>
        nodeMapper(subnode).concat(
            literal(t.newlineIndent))
    );
}