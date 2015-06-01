/* @flow */

'use strict';

var _Object$defineProperty = require('babel-runtime/core-js/object/define-property')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

_Object$defineProperty(exports, '__esModule', {
    value: true
});

exports['default'] = translateInterface;

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _interfaceMember = require('./interfaceMember');

var _interfaceMember2 = _interopRequireDefault(_interfaceMember);

var _emitClass = require('../emit/class');

var _emitClass2 = _interopRequireDefault(_emitClass);

var _rx = require('rx');

var _rx2 = _interopRequireDefault(_rx);

var _extAttrs = require('./extAttrs');

var _extAttrs2 = _interopRequireDefault(_extAttrs);

var _concatIfAny = require('../concatIfAny');

var _concatIfAny2 = _interopRequireDefault(_concatIfAny);

var _FormattingToken = require('../FormattingToken');

var _FormattingToken2 = _interopRequireDefault(_FormattingToken);

var literal = _rx2['default'].Observable.of;

function translateInterface(node) {
    (0, _assert2['default'])(node.type === 'interface' || node.type === 'class', 'Expected IdlInterface, found ' + node.type);
    return (0, _concatIfAny2['default'])((0, _extAttrs2['default'])(node), literal(_FormattingToken2['default'].newlineIndent)).concat((0, _emitClass2['default'])(node, _interfaceMember2['default']));
}

module.exports = exports['default'];
//# sourceMappingURL=interface.js.map