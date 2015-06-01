/* @flow */

import Rx from 'rx';
import assert from 'assert';
var literal = Rx.Observable.of;

import emitMethod from '../emit/method';
import emitIndexer from '../emit/indexer';

import t from '../FormattingToken';

export
default

function translateOperation(node: IdlOperation): Rx.Observable {
    assert(node.type === 'operation',
        `Expected IdlOperation, found ${node.type}`);
    assert(!(node.getter && node.setter), 'operation cannot be both a getter and a setter');

    if (node.name)
        return emitMethod(node);
    if (node.getter)
        return emitIndexer(node);
    if (node.setter)
        return Rx.Observable.empty();
    if (node.stringifier)
        return translateOperation({
            type: 'operation',
            name: 'toString',
            arguments: [],
            idlType: 'DOMString'
        });

    var what = "operation";
    if (node.creator)
        what = "creator";
    if (node.deleter)
        what = "deleter";
    if (node.legacycaller)
        what = "legacycaller";
    return literal(t.enterComment, 'Not implemented: ', what, t.exitComment);

}