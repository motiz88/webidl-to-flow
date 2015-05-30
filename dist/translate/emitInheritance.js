/* @flow */

'use strict';

var _Object$defineProperty = require('babel-runtime/core-js/object/define-property')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

_Object$defineProperty(exports, '__esModule', {
    value: true
});

exports['default'] = emitInheritance;

var _type = require('./type');

var _type2 = _interopRequireDefault(_type);

var _rx = require('rx');

var _rx2 = _interopRequireDefault(_rx);

var literal = _rx2['default'].Observable.of;

function emitInheritance(node) {
    if (!node.inheritance) return _rx2['default'].Observable.empty();else return _rx2['default'].Observable.concat(literal(' extends '), (0, _type2['default'])(node.inheritance));
}

module.exports = exports['default'];
//# sourceMappingURL=emitInheritance.js.map