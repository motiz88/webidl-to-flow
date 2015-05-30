/* @flow */

'use strict';

var _Object$defineProperty = require('babel-runtime/core-js/object/define-property')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

_Object$defineProperty(exports, '__esModule', {
    value: true
});

exports['default'] = translateOperation;

var _rx = require('rx');

var _rx2 = _interopRequireDefault(_rx);

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _emitMethod = require('../emit/method');

var _emitMethod2 = _interopRequireDefault(_emitMethod);

var _emitIndexer = require('../emit/indexer');

var _emitIndexer2 = _interopRequireDefault(_emitIndexer);

var _FormattingToken = require('../FormattingToken');

var _FormattingToken2 = _interopRequireDefault(_FormattingToken);

var literal = _rx2['default'].Observable.of;

function translateOperation(node) {
    (0, _assert2['default'])(node.type === 'operation', 'Expected IdlOperation, found ' + node.type);
    (0, _assert2['default'])(!(node.getter && node.setter), 'operation cannot be both a getter and a setter');

    var decl = null;

    if (node.getter) {
        (0, _assert2['default'])(node.arguments.length > 0);
        decl = (0, _emitIndexer2['default'])(node);
    }

    if (node.name) {
        if (decl) decl = decl.concat(literal(_FormattingToken2['default'].newlineIndent));
        decl = _rx2['default'].Observable.concat(decl || _rx2['default'].Observable.empty(), (0, _emitMethod2['default'])(node));
    }

    return decl || _rx2['default'].Observable.empty();
}

module.exports = exports['default'];
//# sourceMappingURL=operation.js.map