/* @flow */

'use strict';

var _Object$defineProperty = require('babel-runtime/core-js/object/define-property')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

_Object$defineProperty(exports, '__esModule', {
    value: true
});

exports['default'] = emitIndexer;

var _rx = require('rx');

var _rx2 = _interopRequireDefault(_rx);

var _translateType = require('../translate/type');

var _translateType2 = _interopRequireDefault(_translateType);

var _translateArguments = require('../translate/arguments');

var _translateArguments2 = _interopRequireDefault(_translateArguments);

// import assert from 'assert';

var literal = _rx2['default'].Observable.of;

function emitIndexer(node) {
    return (0, _translateArguments2['default'])(node.arguments, '[]').concat(literal(': '), (0, _translateType2['default'])(node.idlType), literal(';'));
}

module.exports = exports['default'];
//# sourceMappingURL=indexer.js.map