/* @flow */

'use strict';

var _Object$defineProperty = require('babel-runtime/core-js/object/define-property')['default'];

var _Object$assign = require('babel-runtime/core-js/object/assign')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

_Object$defineProperty(exports, '__esModule', {
    value: true
});

exports['default'] = translateEnum;

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _emitTypeAlias = require('../emit/typeAlias');

var _emitTypeAlias2 = _interopRequireDefault(_emitTypeAlias);

var _rx = require('rx');

var _rx2 = _interopRequireDefault(_rx);

var _extAttrs = require('./extAttrs');

var _extAttrs2 = _interopRequireDefault(_extAttrs);

var _concatIfAny = require('../concatIfAny');

var _concatIfAny2 = _interopRequireDefault(_concatIfAny);

var _FormattingToken = require('../FormattingToken');

var _FormattingToken2 = _interopRequireDefault(_FormattingToken);

var literal = _rx2['default'].Observable.of;

function translateEnum(node) {
    (0, _assert2['default'])(node.type === 'enum', 'Expected IdlEnum, found ' + node.type);

    return (0, _concatIfAny2['default'])((0, _extAttrs2['default'])(node), literal(_FormattingToken2['default'].newlineIndent)).concat((0, _emitTypeAlias2['default'])(_Object$assign({
        idlType: 'string'
    }, node, {
        values: null
    })));
}

module.exports = exports['default'];
//# sourceMappingURL=enum.js.map