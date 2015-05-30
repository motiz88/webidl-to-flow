/* @flow */

'use strict';

var _Object$defineProperty = require('babel-runtime/core-js/object/define-property')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

_Object$defineProperty(exports, '__esModule', {
    value: true
});

exports['default'] = translateDictionaryField;

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _field = require('./field');

var _field2 = _interopRequireDefault(_field);

function translateDictionaryField(node) {
    (0, _assert2['default'])(node.type === 'field', 'Expected IdlDictionaryField, found ' + node.type);
    return (0, _field2['default'])(node);
}

module.exports = exports['default'];
//# sourceMappingURL=dictionaryField.js.map