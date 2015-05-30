/* @flow */

import assert from 'assert';
import translateField from './field';

export
default

function translateDictionaryField(node: IdlDictionaryField): Rx.Observable {
    assert(node.type === 'field',
        `Expected IdlDictionaryField, found ${node.type}`);
    return translateField((node: IdlField));
}