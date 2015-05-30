/* @flow */

'use strict';

var _Object$defineProperty = require('babel-runtime/core-js/object/define-property')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

_Object$defineProperty(exports, '__esModule', {
    value: true
});

exports['default'] = translateTypedef;

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _emitTypeAlias = require('../emit/typeAlias');

var _emitTypeAlias2 = _interopRequireDefault(_emitTypeAlias);

function translateTypedef(node) {
    (0, _assert2['default'])(node.type === 'typedef', 'Expected IdlTypedef, found ' + node.type);

    return (0, _emitTypeAlias2['default'])(node);
}

module.exports = exports['default'];
//# sourceMappingURL=typedef.js.map