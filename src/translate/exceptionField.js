/* @flow */

import assert from 'assert';
import translateField from './field';

export
default

function translateExceptionField(node: IdlExceptionField): Rx.Observable {
    assert(node.type === 'field',
        `Expected IdlExceptionField, found ${node.type}`);
    return translateField((node: IdlField));
}