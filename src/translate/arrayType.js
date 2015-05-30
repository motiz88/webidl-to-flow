/* @flow */

import Rx from 'rx';
import assert from 'assert';
import translateType from './type';

// var literal = Rx.Observable.of;

export
default

function translateArrayType(node: IdlType): Rx.Observable {
    assert(node.array, "Expected an array");
    assert(node.nullableArray, "An array node should have node.nullableArray too");
    assert.strictEqual(node.array, node.nullableArray.length, "node.nullableArray.length !== node.array");
    return Rx.Observable
        .from(node.nullableArray)
        .map(
            isNullable => isNullable ? 'Array<?' : 'Array<'
        )
        .concat(translateType(node.idlType))
        .concat(Rx.Observable.repeat('>', node.array));
}