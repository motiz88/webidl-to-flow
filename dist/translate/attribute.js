/* @flow */

'use strict';

var _Object$defineProperty = require('babel-runtime/core-js/object/define-property')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

_Object$defineProperty(exports, '__esModule', {
    value: true
});

exports['default'] = translateAttribute;

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _emitField = require('../emit/field');

var _emitField2 = _interopRequireDefault(_emitField);

var _rx = require('rx');

var _rx2 = _interopRequireDefault(_rx);

var _extAttrs = require('./extAttrs');

var _extAttrs2 = _interopRequireDefault(_extAttrs);

var _concatIfAny = require('../concatIfAny');

var _concatIfAny2 = _interopRequireDefault(_concatIfAny);

var _FormattingToken = require('../FormattingToken');

var _FormattingToken2 = _interopRequireDefault(_FormattingToken);

var literal = _rx2['default'].Observable.of;

function translateAttribute(node) {
    (0, _assert2['default'])(node.type === 'attribute', 'Expected IdlAttribute, found ' + node.type);
    return (0, _concatIfAny2['default'])((0, _extAttrs2['default'])(node), literal(_FormattingToken2['default'].newlineIndent)).concat((0, _emitField2['default'])(node));
}

module.exports = exports['default'];
//# sourceMappingURL=attribute.js.map