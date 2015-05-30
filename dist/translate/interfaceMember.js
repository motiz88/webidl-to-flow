/* @flow */

'use strict';

var _Object$defineProperty = require('babel-runtime/core-js/object/define-property')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

_Object$defineProperty(exports, '__esModule', {
    value: true
});

exports['default'] = translateInterfaceMember;

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _notImplemented = require('./notImplemented');

var _notImplemented2 = _interopRequireDefault(_notImplemented);

var _operation = require('./operation');

var _operation2 = _interopRequireDefault(_operation);

var _notImplemented3 = _interopRequireDefault(_notImplemented);

var _constant = require('./constant');

var _constant2 = _interopRequireDefault(_constant);

var _attribute = require('./attribute');

var _attribute2 = _interopRequireDefault(_attribute);

var _typedef = require('./typedef');

var _typedef2 = _interopRequireDefault(_typedef);

var _notImplemented4 = _interopRequireDefault(_notImplemented);

function translateInterfaceMember(node) {
    (0, _assert2['default'])(node.type === 'iterator' || node.type === 'operation' || node.type === 'serializer' || node.type === 'const' || node.type === 'attribute' || node.type === 'typedef', 'Expected IdlInterfaceMember, found ' + node.type);
    switch (node.type) {
        case 'iterator':
            return (0, _notImplemented2['default'])(node);
        case 'operation':
            return (0, _operation2['default'])(node);
        case 'serializer':
            return (0, _notImplemented3['default'])(node);
        case 'const':
            return (0, _constant2['default'])(node);
        case 'attribute':
            return (0, _attribute2['default'])(node);
        case 'typedef':
            return (0, _typedef2['default'])(node);
        default:
            return (0, _notImplemented4['default'])(node);
    }
    //IdlIterator | IdlOperation | IdlSerializer | IdlConstant;
}

module.exports = exports['default'];
//# sourceMappingURL=interfaceMember.js.map