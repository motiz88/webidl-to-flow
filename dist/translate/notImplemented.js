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

var _FormattingToken = require('../FormattingToken');

var _FormattingToken2 = _interopRequireDefault(_FormattingToken);

var literal = _rx2['default'].Observable.of;

function notImplemented(node, reason) {
    return literal(_FormattingToken2['default'].enterComment, 'Not implemented: ' + (node.type || node.idlType) + '' + (node.name ? ' ' + node.name : '') + '' + (reason ? ' (' + reason + ')' : ''), _FormattingToken2['default'].exitComment);
}

module.exports = exports['default'];
//# sourceMappingURL=notImplemented.js.map