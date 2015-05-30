/* @flow */

'use strict';

var _Object$defineProperty = require('babel-runtime/core-js/object/define-property')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

_Object$defineProperty(exports, '__esModule', {
    value: true
});

exports['default'] = translateArgument;

var _rx = require('rx');

var _rx2 = _interopRequireDefault(_rx);

// import assert from 'assert';

var _type = require('./type');

var _type2 = _interopRequireDefault(_type);

var _extAttrs = require('./extAttrs');

var _extAttrs2 = _interopRequireDefault(_extAttrs);

var _concatIfAny = require('../concatIfAny');

var _concatIfAny2 = _interopRequireDefault(_concatIfAny);

var literal = _rx2['default'].Observable.of;

function translateArgument(node) {
    return _rx2['default'].Observable.concat((0, _concatIfAny2['default'])((0, _extAttrs2['default'])(node, ' '), literal(' ')), literal(node.variadic ? '...' : ''), literal(node.name), literal(node.optional ? '? ' : ''), literal(': '), (0, _type2['default'])(node.idlType));
}

module.exports = exports['default'];
//# sourceMappingURL=argument.js.map