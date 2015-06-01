/* @flow */

import assert from 'assert';
import translateIterator from './notImplemented';
import translateOperation from './operation';
import translateSerializer from './notImplemented';
import translateConstant from './constant';
import translateAttribute from './attribute';
import translateTypedef from './typedef';
import translateIterablelike from './iterablelike';
import notImplemented from './notImplemented';

export
default

function translateInterfaceMember(node: IdlInterfaceMember): Rx.Observable {
    assert(node.type === 'iterator' || node.type === 'operation' || node.type === 'serializer' || node.type === 'const' || node.type === 'attribute' || node.type === 'typedef' || node.type === 'iterable' || node.type === 'legacyiterable' || node.type === 'setlike' || node.type === 'maplike',
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
        case 'iterable':
            /* falls through */
        case 'legacyiterable':
            /* falls through */
        case 'setlike':
            /* falls through */
        case 'maplike':
            return translateIterablelike((node: IdlIterablelike));
        default:
            return notImplemented(node);
    }
    //IdlIterator | IdlOperation | IdlSerializer | IdlConstant;
}