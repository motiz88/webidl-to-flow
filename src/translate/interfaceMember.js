/* @flow */

import assert from 'assert';
import translateIterator from './notImplemented';
import translateOperation from './operation';
import translateSerializer from './notImplemented';
import translateConstant from './constant';
import translateAttribute from './attribute';
import translateTypedef from './typedef';
import notImplemented from './notImplemented';

export
default

function translateInterfaceMember(node: IdlInterfaceMember): Rx.Observable {
    assert(node.type === 'iterator' || node.type === 'operation' || node.type === 'serializer' || node.type === 'const' || node.type === 'attribute' || node.type === 'typedef',
        `Expected IdlInterfaceMember, found ${node.type}`);
    switch (node.type) {
        case 'iterator':
            return translateIterator((node: IdlIterator));
        case 'operation':
            return translateOperation((node: IdlOperation));
        case 'serializer':
            return translateSerializer((node: IdlSerializer));
        case 'const':
            return translateConstant((node: IdlConstant));
        case 'attribute':
            return translateAttribute((node: IdlAttribute));
        case 'typedef':
            return translateTypedef((node: IdlTypedef));
        default:
            return notImplemented(node);
    }
    //IdlIterator | IdlOperation | IdlSerializer | IdlConstant;
}