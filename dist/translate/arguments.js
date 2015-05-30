/* @flow */

'use strict';

var _Object$defineProperty = require('babel-runtime/core-js/object/define-property')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

_Object$defineProperty(exports, '__esModule', {
    value: true
});

exports['default'] = translateArguments;

var _rx = require('rx');

var _rx2 = _interopRequireDefault(_rx);

var _argument = require('./argument');

var _argument2 = _interopRequireDefault(_argument);

var literal = _rx2['default'].Observable.of;

function translateArguments(node, enclosed) {
    var coreArguments = _rx2['default'].Observable.from(node).concatMap(function (subnode) {
        return (0, _argument2['default'])(subnode).concat(literal(', '));
    }).skipLast(1);

    if (enclosed && typeof enclosed === 'boolean') enclosed = '()';

    if (enclosed) return _rx2['default'].Observable.concat(literal(enclosed[0]), coreArguments, literal(enclosed[1]));else return coreArguments;
}

module.exports = exports['default'];
//# sourceMappingURL=arguments.js.map