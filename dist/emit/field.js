/* @flow */

'use strict';

var _Object$defineProperty = require('babel-runtime/core-js/object/define-property')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

_Object$defineProperty(exports, '__esModule', {
    value: true
});

exports['default'] = emitField;

var _translateType = require('../translate/type');

var _translateType2 = _interopRequireDefault(_translateType);

var _rx = require('rx');

var _rx2 = _interopRequireDefault(_rx);

var literal = _rx2['default'].Observable.of;

function emitField(node) {
    return _rx2['default'].Observable.concat(literal(node['static'] ? 'static ' : ''), literal(node.name), literal(': '), (0, _translateType2['default'])(node.idlType), literal(';'));
}

module.exports = exports['default'];
//# sourceMappingURL=field.js.map