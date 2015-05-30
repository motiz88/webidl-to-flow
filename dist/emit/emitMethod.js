/* @flow */

'use strict';

var _Object$defineProperty = require('babel-runtime/core-js/object/define-property')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

_Object$defineProperty(exports, '__esModule', {
    value: true
});

exports['default'] = emitMethod;

var _rx = require('rx');

var _rx2 = _interopRequireDefault(_rx);

var _type = require('./type');

var _type2 = _interopRequireDefault(_type);

var _arguments = require('./arguments');

var _arguments2 = _interopRequireDefault(_arguments);

// import assert from 'assert';

var literal = _rx2['default'].Observable.of;

function emitMethod(node) {
    return _rx2['default'].Observable.concat(literal(node['static'] ? 'static ' : ''), literal(node.name ? node.name : ''), literal('('), (0, _arguments2['default'])(node.arguments || []), literal(')'), literal(node.idlType ? ': ' : ''), node.idlType ? (0, _type2['default'])(node.idlType) : literal(''), literal(';'));
}

module.exports = exports['default'];
//# sourceMappingURL=emitMethod.js.map