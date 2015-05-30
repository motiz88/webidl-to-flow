/* @flow */

import assert from 'assert';
import translateExceptionMember from './exceptionMember';
import emitClass from '../emit/class';
import Rx from 'rx';
import translateExtAttrs from './extAttrs';
import concatIfAny from '../concatIfAny';

var literal = Rx.Observable.of;
import t from '../FormattingToken';

export
default

function translateException(node: IdlException): Rx.Observable {
    assert(node.type === 'exception',
        `Expected IdlException, found ${node.type}`);
    return concatIfAny(translateExtAttrs(node), literal(t.newlineIndent))
        .concat(emitClass(Object.assign({}, node, {
            inheritance: node.inheritance || (node.name !== 'Error' && 'Error') || null
        }), translateExceptionMember));
}