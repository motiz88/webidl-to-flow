/* @flow */

import Rx from 'rx';
// import notImplemented from './notImplemented';
import translateArguments from '../translate/arguments';
import util from 'util';

var literal = Rx.Observable.of;

export
default

function emitExtAttr(node: IdlExtAttr): Rx.Observable {
    var decl = literal(node.name);
    if (node.arguments)
        decl = decl.concat(literal('('),
            translateArguments(node.arguments || []),
            literal(')'));

    if (node.rhs) {
        decl = decl.concat(literal('='));
        switch (node.rhs.type) {
            case 'identifier':
                decl = decl.concat(literal(node.rhs.value));
                break;
            case 'identifier-list':
                decl = decl.concat(Rx.Observable.from(node.rhs.value));
                break;
            default:
                decl = decl.concat(util.inspect(literal(node.rhs.value)));
                break;
        }
    }
    return decl;
}