/* @flow */

'use strict';

var _Object$defineProperty = require('babel-runtime/core-js/object/define-property')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

_Object$defineProperty(exports, '__esModule', {
    value: true
});

exports['default'] = emitTypeAlias;

var _rx = require('rx');

var _rx2 = _interopRequireDefault(_rx);

var _type = require('./type');

var _type2 = _interopRequireDefault(_type);

// import notImplemented from './notImplemented';

var literal = _rx2['default'].Observable.of;

function emitTypeAlias(node) {
    return _rx2['default'].Observable.concat(literal('type ' + node.name + ' = '), (0, _type2['default'])(node.idlType), literal(';'));
}

module.exports = exports['default'];
//# sourceMappingURL=emitTypeAlias.js.map