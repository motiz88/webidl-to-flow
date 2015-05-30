/* @flow */

'use strict';

var _Object$defineProperty = require('babel-runtime/core-js/object/define-property')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

_Object$defineProperty(exports, '__esModule', {
    value: true
});

exports['default'] = translateArrayType;

var _rx = require('rx');

var _rx2 = _interopRequireDefault(_rx);

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _type = require('./type');

var _type2 = _interopRequireDefault(_type);

// var literal = Rx.Observable.of;

function translateArrayType(node) {
    (0, _assert2['default'])(node.array, 'Expected an array');
    (0, _assert2['default'])(node.nullableArray, 'An array node should have node.nullableArray too');
    _assert2['default'].strictEqual(node.array, node.nullableArray.length, 'node.nullableArray.length !== node.array');
    return _rx2['default'].Observable.from(node.nullableArray).map(function (isNullable) {
        return isNullable ? 'Array<?' : 'Array<';
    }).concat((0, _type2['default'])(node.idlType)).concat(_rx2['default'].Observable.repeat('>', node.array));
}

module.exports = exports['default'];
//# sourceMappingURL=arrayType.js.map