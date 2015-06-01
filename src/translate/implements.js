/* @flow */

import assert from 'assert';
import Rx from 'rx';
import translateExtAttrs from './extAttrs';
import translateType from './type';
import concatIfAny from '../concatIfAny';

var literal = Rx.Observable.of;
import t from '../FormattingToken';

export
default

function translateImplements(node: IdlConstant): Rx.Observable {
    assert(node.type === 'implements',
        `Expected IdlImplements, found ${node.type}`);

    return concatIfAny(translateExtAttrs(node), literal(t.newlineIndent))
        .concat(
        	literal(t.enterComment),
            translateType(node.target), literal(' implements '), translateType(node.implements),
            literal(t.exitComment)
        );
}