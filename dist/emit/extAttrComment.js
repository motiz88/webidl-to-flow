/* @flow */

'use strict';

var _Object$defineProperty = require('babel-runtime/core-js/object/define-property')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

_Object$defineProperty(exports, '__esModule', {
    value: true
});

exports['default'] = emitExtAttrComment;

var _rx = require('rx');

var _rx2 = _interopRequireDefault(_rx);

// import notImplemented from './notImplemented';

var _translateArguments = require('../translate/arguments');

var _translateArguments2 = _interopRequireDefault(_translateArguments);

var _util = require('util');

var _util2 = _interopRequireDefault(_util);

var literal = _rx2['default'].Observable.of;

function emitExtAttrComment(node) {
    var decl = literal('/* [', node.name);
    if (node.arguments) decl = decl.concat(literal('('), (0, _translateArguments2['default'])(node.arguments || []), literal(')'));

    if (node.rhs) {
        decl = decl.concat(literal('='));
        switch (node.rhs.type) {
            case 'identifier':
                decl = decl.concat(literal(node.rhs.value));
                break;
            case 'identifier-list':
                decl = decl.concat(_rx2['default'].Observable.from(node.rhs.value));
                break;
            default:
                decl = decl.concat(_util2['default'].inspect(literal(node.rhs.value)));
                break;
        }
    }
    decl = decl.concat(literal('] */'));
    return decl;
}

module.exports = exports['default'];
//# sourceMappingURL=extAttrComment.js.map