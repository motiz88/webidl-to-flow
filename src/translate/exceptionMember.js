/* @flow */

import assert from 'assert';
import translateExceptionField from './exceptionField';
import translateOperation from './operation';
import translateConstant from './constant';
import notImplemented from './notImplemented';

export
default

function translateExceptionMember(node: IdlExceptionMember): Rx.Observable {
    assert(node.type === 'field' || node.type === 'operation' || node.type === 'const',
        `Expected IdlExceptionMember, found ${node.type}`);
    switch (node.type) {
        case 'field':
            return translateExceptionField((node: IdlExceptionField));
        case 'operation':
            return translateOperation((node: IdlOperation));
        case 'const':
            return translateConstant((node: IdlConstant));
        default:
            return notImplemented(node);
    }
    //IdlIterator | IdlOperation | IdlSerializer | IdlConstant;
}