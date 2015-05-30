/* @flow */

import assert from 'assert';
import emitTypeAlias from '../emit/typeAlias';
import Rx from 'rx';
import translateExtAttrs from './extAttrs';
import concatIfAny from '../concatIfAny';

var literal = Rx.Observable.of;
import t from '../FormattingToken';

export
default

function translateEnum(node: IdlEnum): Rx.Observable {
    assert(node.type === 'enum',
        `Expected IdlEnum, found ${node.type}`);

    return concatIfAny(translateExtAttrs(node), literal(t.newlineIndent))
        .concat(emitTypeAlias(Object.assign({
            idlType: 'string'
        }, node, {
            values: null
        })));
}