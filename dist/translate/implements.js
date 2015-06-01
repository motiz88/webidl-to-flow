/* @flow */

'use strict';

var _Object$defineProperty = require('babel-runtime/core-js/object/define-property')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

_Object$defineProperty(exports, '__esModule', {
    value: true
});

exports['default'] = translateImplements;

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _rx = require('rx');

var _rx2 = _interopRequireDefault(_rx);

var _extAttrs = require('./extAttrs');

var _extAttrs2 = _interopRequireDefault(_extAttrs);

var _type = require('./type');

var _type2 = _interopRequireDefault(_type);

var _concatIfAny = require('../concatIfAny');

var _concatIfAny2 = _interopRequireDefault(_concatIfAny);

var _FormattingToken = require('../FormattingToken');

var _FormattingToken2 = _interopRequireDefault(_FormattingToken);

var literal = _rx2['default'].Observable.of;

function translateImplements(node) {
    (0, _assert2['default'])(node.type === 'implements', 'Expected IdlImplements, found ' + node.type);

    return (0, _concatIfAny2['default'])((0, _extAttrs2['default'])(node), literal(_FormattingToken2['default'].newlineIndent)).concat(literal(_FormattingToken2['default'].enterComment), (0, _type2['default'])(node.target), literal(' implements '), (0, _type2['default'])(node['implements']), literal(_FormattingToken2['default'].exitComment));
}

module.exports = exports['default'];
//# sourceMappingURL=implements.js.map