/* @flow */

'use strict';

var _Object$defineProperty = require('babel-runtime/core-js/object/define-property')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

_Object$defineProperty(exports, '__esModule', {
    value: true
});

exports['default'] = emitInheritance;

var _translateType = require('../translate/type');

var _translateType2 = _interopRequireDefault(_translateType);

var _rx = require('rx');

var _rx2 = _interopRequireDefault(_rx);

var literal = _rx2['default'].Observable.of;

function emitInheritance(node) {
    if (!node.inheritance) return _rx2['default'].Observable.empty();else return _rx2['default'].Observable.concat(literal('extends '), (0, _translateType2['default'])(node.inheritance));
}

module.exports = exports['default'];
//# sourceMappingURL=inheritance.js.map