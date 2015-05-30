/* @flow */

// import Rx from 'rx';

'use strict';

var _Object$defineProperty = require('babel-runtime/core-js/object/define-property')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

_Object$defineProperty(exports, '__esModule', {
    value: true
});

exports['default'] = translateTypeOrFunctionType;

var _translateType = require('../translate/type');

var _translateType2 = _interopRequireDefault(_translateType);

var _translateFunctionType = require('../translate/functionType');

var _translateFunctionType2 = _interopRequireDefault(_translateFunctionType);

function translateTypeOrFunctionType(node) {
    return node.arguments ? (0, _translateFunctionType2['default'])(node) : (0, _translateType2['default'])(node.idlType);
}

module.exports = exports['default'];
//# sourceMappingURL=typeOrFunctionType.js.map