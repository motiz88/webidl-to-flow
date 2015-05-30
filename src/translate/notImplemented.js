/* @flow */

import Rx from 'rx';

export
default

function notImplemented(node: {type: ?string, idlType: ?any, name: ?string}, reason: ?string): Rx.Observable {
    return Rx.Observable.of(`/* Not implemented: ${node.type || node.idlType}${node.name ? (' ' + node.name) : ''}${reason ? (' (' + reason + ')') : ''} */`);
}
