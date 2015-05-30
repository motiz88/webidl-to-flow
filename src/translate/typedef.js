/* @flow */

import assert from 'assert';
import emitTypeAlias from '../emit/typeAlias';

export
default

function translateTypedef(node: IdlTypedef): Rx.Observable {
    assert(node.type === 'typedef',
        `Expected IdlTypedef, found ${node.type}`);

    return emitTypeAlias(node);
}