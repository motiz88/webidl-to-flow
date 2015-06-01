/* @flow */

import Rx from 'rx';
import assert from 'assert';
var literal = Rx.Observable.of;

import notImplemented from './notImplemented';

import t from '../FormattingToken';

export
default

function translateIterablelike(node: IdlIterablelike): Rx.Observable {
    assert(node.type === 'iterable' || node.type === 'legacyiterable' || node.type === 'setlike' || node.type === 'maplike',
        `Expected IdlIterablelike, found ${node.type}`);

    return notImplemented(node);
}