/* @flow */

'use strict';

var _Object$defineProperty = require('babel-runtime/core-js/object/define-property')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

_Object$defineProperty(exports, '__esModule', {
    value: true
});

exports['default'] = notImplemented;

var _rx = require('rx');

var _rx2 = _interopRequireDefault(_rx);

function notImplemented(node, reason) {
    return _rx2['default'].Observable.of('/* Not implemented: ' + (node.type || node.idlType) + '' + (node.name ? ' ' + node.name : '') + '' + (reason ? ' (' + reason + ')' : '') + ' */');
}

module.exports = exports['default'];
//# sourceMappingURL=notImplemented.js.map