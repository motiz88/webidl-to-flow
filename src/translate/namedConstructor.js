/* @flow */

import Rx from 'rx';
import assert from 'assert';

var literal = Rx.Observable.of;

import emitMethod from '../emit/method';
import t from '../FormattingToken';

export
default

function translateNamedConstructor(node: IdlOperation): Rx.Observable {
    assert(node.type === 'named constructor',
        `Expected named constructor, found ${node.type}`);

    return literal(t.enterComment, 'WebIDL: named constructor', t.exitComment,
        t.newlineIndent,
        'declare function '
    ).concat(emitMethod(node));
}