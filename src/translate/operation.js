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

    var decl = null;

    if (node.getter) {
        assert(node.arguments.length > 0);
        decl = emitIndexer(node);
    }

    if (node.name) {
        if (decl)
            decl = decl.concat(literal(t.newlineIndent));
        decl = Rx.Observable.concat(decl || Rx.Observable.empty(), emitMethod(node));
    }


    return decl || Rx.Observable.empty();
}