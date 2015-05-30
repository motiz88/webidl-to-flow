/* @flow */

import assert from 'assert';
import emitField from '../emit/field';
import Rx from 'rx';
import translateExtAttrs from './extAttrs';
import concatIfAny from '../concatIfAny';

var literal = Rx.Observable.of;
import t from '../FormattingToken';

export
default

function translateField(node: IdlField): Rx.Observable {
    assert(node.type === 'field',
        `Expected IdlField, found ${node.type}`);

    return concatIfAny(translateExtAttrs(node), literal(t.newlineIndent))
        .concat(emitField(node));
}