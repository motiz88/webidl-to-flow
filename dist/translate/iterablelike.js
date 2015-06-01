/* @flow */

'use strict';

var _Object$defineProperty = require('babel-runtime/core-js/object/define-property')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

_Object$defineProperty(exports, '__esModule', {
    value: true
});

exports['default'] = translateIterablelike;

var _rx = require('rx');

var _rx2 = _interopRequireDefault(_rx);

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _notImplemented = require('./notImplemented');

var _notImplemented2 = _interopRequireDefault(_notImplemented);

var _FormattingToken = require('../FormattingToken');

var _FormattingToken2 = _interopRequireDefault(_FormattingToken);

var literal = _rx2['default'].Observable.of;

function translateIterablelike(node) {
    (0, _assert2['default'])(node.type === 'iterable' || node.type === 'legacyiterable' || node.type === 'setlike' || node.type === 'maplike', 'Expected IdlIterablelike, found ' + node.type);

    return (0, _notImplemented2['default'])(node);
}

module.exports = exports['default'];
//# sourceMappingURL=iterablelike.js.map