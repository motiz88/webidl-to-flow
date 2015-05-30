/* @flow */

'use strict';

var _Object$defineProperty = require('babel-runtime/core-js/object/define-property')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

_Object$defineProperty(exports, '__esModule', {
    value: true
});

exports['default'] = translateUnionType;

var _rx = require('rx');

var _rx2 = _interopRequireDefault(_rx);

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _type = require('./type');

var _type2 = _interopRequireDefault(_type);

var literal = _rx2['default'].Observable.of;

function translateUnionType(node, enclosed) {
    (0, _assert2['default'])(node.union, 'Expected a union type');
    (0, _assert2['default'])(!node.array, 'A union type cannot also be an array');
    (0, _assert2['default'])(typeof node.idlType !== 'string', 'Expected a type list in node.idlType');
    var coreUnion = _rx2['default'].Observable.from(node.idlType).concatMap(function (subnode) {
        return (0, _type2['default'])(subnode).concat(literal(' | '));
    }).skipLast(1);

    if (enclosed) return _rx2['default'].Observable.concat(literal('('), coreUnion, literal(')'));else return coreUnion;
}

module.exports = exports['default'];
//# sourceMappingURL=unionType.js.map