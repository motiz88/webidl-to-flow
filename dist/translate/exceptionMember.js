/* @flow */

'use strict';

var _Object$defineProperty = require('babel-runtime/core-js/object/define-property')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

_Object$defineProperty(exports, '__esModule', {
    value: true
});

exports['default'] = translateExceptionMember;

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _exceptionField = require('./exceptionField');

var _exceptionField2 = _interopRequireDefault(_exceptionField);

var _operation = require('./operation');

var _operation2 = _interopRequireDefault(_operation);

var _constant = require('./constant');

var _constant2 = _interopRequireDefault(_constant);

var _notImplemented = require('./notImplemented');

var _notImplemented2 = _interopRequireDefault(_notImplemented);

function translateExceptionMember(node) {
    (0, _assert2['default'])(node.type === 'field' || node.type === 'operation' || node.type === 'const', 'Expected IdlExceptionMember, found ' + node.type);
    switch (node.type) {
        case 'field':
            return (0, _exceptionField2['default'])(node);
        case 'operation':
            return (0, _operation2['default'])(node);
        case 'const':
            return (0, _constant2['default'])(node);
        default:
            return (0, _notImplemented2['default'])(node);
    }
    //IdlIterator | IdlOperation | IdlSerializer | IdlConstant;
}

module.exports = exports['default'];
//# sourceMappingURL=exceptionMember.js.map