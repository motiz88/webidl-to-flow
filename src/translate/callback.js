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

function translateCallback(node: IdlCallback): Rx.Observable {
    assert(node.type === 'callback',
        `Expected IdlCallback, found ${node.type}`);
    
    return concatIfAny(translateExtAttrs(node), literal(t.newlineIndent))
        .concat(emitTypeAlias(node));
}