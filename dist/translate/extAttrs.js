/* @flow */

'use strict';

var _Object$defineProperty = require('babel-runtime/core-js/object/define-property')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

_Object$defineProperty(exports, '__esModule', {
    value: true
});

exports['default'] = translateExtAttrs;

var _rx = require('rx');

var _rx2 = _interopRequireDefault(_rx);

var _emitExtAttr = require('../emit/extAttr');

var _emitExtAttr2 = _interopRequireDefault(_emitExtAttr);

var literal = _rx2['default'].Observable.of;

function translateExtAttrs(_x) {
    var _again = true;

    _function: while (_again) {
        var node = _x;
        _again = false;

        if (node.extAttrs) {
            _x = node.extAttrs;
            _again = true;
            continue _function;
        }

        if (!node.length) return _rx2['default'].Observable.empty();

        return literal('/* [').concat(_rx2['default'].Observable.from(node).concatMap(function (subnode) {
            return _rx2['default'].Observable.concat((0, _emitExtAttr2['default'])(subnode), literal(', '));
        }).skipLast(1), literal('] */'));
    }
}

module.exports = exports['default'];
//# sourceMappingURL=extAttrs.js.map