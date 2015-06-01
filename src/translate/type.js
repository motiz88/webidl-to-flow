/* @flow */

import Rx from 'rx';
import assert from 'assert';
// import notImplemented from './notImplemented';
import t from '../FormattingToken';

var literal = Rx.Observable.of;

import translateUnionType from './unionType';
import translateArrayType from './arrayType';
import primitiveTypes from '../data/primitiveTypes';

export
default

function translateType(node: IdlType | string | {
    arguments: Array < IdlArgument >
}): Rx.Observable {
    assert(node);
    if (typeof node === 'string') {
        if (node in primitiveTypes)
            return literal(primitiveTypes[node]);
        else
            return literal(node);
    }

    var encloseUnion = false;

    var decl = Rx.Observable.empty();

    if (node.nullable) {
        encloseUnion = true;
        decl = decl.concat(literal('?'));
    }

    if (node.union)
        return decl.concat(translateUnionType(node, encloseUnion));

    if (node.array)
        return decl.concat(translateArrayType(node));

    if (node.generic)
        return decl.concat(translateType(node.generic), literal('<'), translateType(node.idlType), literal('>'));

    if (typeof node.idlType === 'string')
        return translateType(node.idlType);
    else
        return literal(t.enterComment, JSON.stringify(node), t.exitComment);
}