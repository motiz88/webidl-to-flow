/* @flow */

import assert from 'assert';
import translateDictionaryField from './dictionaryField';
import emitClass from '../emit/class';
import Rx from 'rx';
import translateExtAttrs from './extAttrs';
import concatIfAny from '../concatIfAny';

var literal = Rx.Observable.of;
import t from '../FormattingToken';

export
default

function translateDictionary(node: IdlDictionary): Rx.Observable {
    assert(node.type === 'dictionary',
        `Expected IdlDictionary, found ${node.type}`);
    return concatIfAny(translateExtAttrs(node), literal(t.newlineIndent))
        .concat(emitClass(node, translateDictionaryField));
}