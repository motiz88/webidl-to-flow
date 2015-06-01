/* @flow */

import assert from 'assert';
import translateInterfaceMember from './interfaceMember';
import emitClass from '../emit/class';
import Rx from 'rx';
import translateExtAttrs from './extAttrs';
import concatIfAny from '../concatIfAny';

var literal = Rx.Observable.of;
import t from '../FormattingToken';

export
default

function translateInterface(node: IdlInterface): Rx.Observable {
    assert(node.type === 'interface' || node.type === 'class',
        `Expected IdlInterface, found ${node.type}`);
    return concatIfAny(translateExtAttrs(node), literal(t.newlineIndent))
        .concat(emitClass(node, translateInterfaceMember));
}