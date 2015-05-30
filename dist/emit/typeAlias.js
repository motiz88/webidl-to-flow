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

var _translateTypeOrFunctionType = require('../translate/typeOrFunctionType');

var _translateTypeOrFunctionType2 = _interopRequireDefault(_translateTypeOrFunctionType);

// import notImplemented from './notImplemented';

var literal = _rx2['default'].Observable.of;

function emitTypeAlias(node) {
    return _rx2['default'].Observable.concat(literal('type ' + node.name + ' = '), (0, _translateTypeOrFunctionType2['default'])(node), literal(';'));
}

module.exports = exports['default'];
//# sourceMappingURL=typeAlias.js.map