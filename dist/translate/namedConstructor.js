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

var _emitMethod = require('../emit/method');

var _emitMethod2 = _interopRequireDefault(_emitMethod);

var _FormattingToken = require('../FormattingToken');

var _FormattingToken2 = _interopRequireDefault(_FormattingToken);

var literal = _rx2['default'].Observable.of;

function translateNamedConstructor(node) {
    (0, _assert2['default'])(node.type === 'named constructor', 'Expected named constructor, found ' + node.type);

    return literal(_FormattingToken2['default'].enterComment, 'WebIDL: named constructor', _FormattingToken2['default'].exitComment, _FormattingToken2['default'].newlineIndent, 'declare function ').concat((0, _emitMethod2['default'])(node));
}

module.exports = exports['default'];
//# sourceMappingURL=namedConstructor.js.map