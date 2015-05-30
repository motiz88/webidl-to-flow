/* @flow */

'use strict';

var _Object$defineProperty = require('babel-runtime/core-js/object/define-property')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

_Object$defineProperty(exports, '__esModule', {
    value: true
});

exports['default'] = translateNamedConstructor;

var _rx = require('rx');

var _rx2 = _interopRequireDefault(_rx);

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

// import translateType from './type';
// import translateArguments from './arguments';

var _emitMethod = require('../emit/method');

var _emitMethod2 = _interopRequireDefault(_emitMethod);

// import notImplemented from './notImplemented';

var literal = _rx2['default'].Observable.of;
function translateNamedConstructor(node) {
    (0, _assert2['default'])(node.type === 'named constructor', 'Expected named constructor, found ' + node.type);

    return literal('/* WebIDL: named constructor */\ndeclare function ').concat((0, _emitMethod2['default'])(node));
}

module.exports = exports['default'];
//# sourceMappingURL=translateNamedConstructor.js.map