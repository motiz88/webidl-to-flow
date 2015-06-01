/* @flow */

// import Rx from 'rx';
'use strict';

var _Object$defineProperty = require('babel-runtime/core-js/object/define-property')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

_Object$defineProperty(exports, '__esModule', {
    value: true
});

exports['default'] = translateRoot;

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _interface = require('./interface');

var _interface2 = _interopRequireDefault(_interface);

var _notImplemented = require('./notImplemented');

var _notImplemented2 = _interopRequireDefault(_notImplemented);

var _callbackInterface = require('./callbackInterface');

var _callbackInterface2 = _interopRequireDefault(_callbackInterface);

var _exception = require('./exception');

var _exception2 = _interopRequireDefault(_exception);

var _enum = require('./enum');

var _enum2 = _interopRequireDefault(_enum);

var _typedef = require('./typedef');

var _typedef2 = _interopRequireDefault(_typedef);

var _callback = require('./callback');

var _callback2 = _interopRequireDefault(_callback);

var _dictionary = require('./dictionary');

var _dictionary2 = _interopRequireDefault(_dictionary);

var _namedConstructor = require('./namedConstructor');

var _namedConstructor2 = _interopRequireDefault(_namedConstructor);

var _implements = require('./implements');

var _implements2 = _interopRequireDefault(_implements);

function translateRoot(node) {
    (0, _assert2['default'])(node.type === 'interface' || node.type === 'class' || node.type === 'callback interface' || node.type === 'exception' || node.type === 'enum' || node.type === 'typedef' || node.type === 'callback' || node.type === 'dictionary' || node.type === 'implements' || node.type === 'named constructor', 'Expected IdlRootDefinition, found ' + node.type);
    switch (node.type) {
        case 'interface':
        /* falls through */
        case 'class':
            return (0, _interface2['default'])(node);
        case 'callback interface':
            return (0, _callbackInterface2['default'])(node);
        case 'exception':
            return (0, _exception2['default'])(node);
        case 'enum':
            return (0, _enum2['default'])(node);
        case 'typedef':
            return (0, _typedef2['default'])(node);
        case 'callback':
            return (0, _callback2['default'])(node);
        case 'dictionary':
            return (0, _dictionary2['default'])(node);
        case 'implements':
            return (0, _implements2['default'])(node);
        case 'named constructor':
            // These are inserted by preprocessAst, NOT by webidl2.js
            return (0, _namedConstructor2['default'])(node);
        default:
            return (0, _notImplemented2['default'])(node);
    }
    // IdlInterface | IdlCallbackInterface | IdlException | IdlEnum | IdlTypedef | IdlCallback | IdlDictionary | IdlImplements;
}

module.exports = exports['default'];
//# sourceMappingURL=root.js.map