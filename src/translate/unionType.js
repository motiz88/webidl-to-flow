/* @flow */

import Rx from 'rx';
import assert from 'assert';
import translateType from './type';

var literal = Rx.Observable.of;

export
default

function translateUnionType(node: IdlType, enclosed: boolean): Rx.Observable {
    assert(node.union, "Expected a union type");
    assert(!node.array, "A union type cannot also be an array");
    assert(typeof node.idlType !== 'string', 'Expected a type list in node.idlType');
    var coreUnion = Rx.Observable.from(node.idlType)
        .concatMap(subnode => translateType(subnode)
            .concat(literal(' | ')))
        .skipLast(1);

    if (enclosed)
        return Rx.Observable.concat(
            literal('('),
            coreUnion,
            literal(')'));
    else
        return coreUnion;
}