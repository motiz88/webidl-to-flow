/* @flow */

'use strict';

var _Object$defineProperty = require('babel-runtime/core-js/object/define-property')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

_Object$defineProperty(exports, '__esModule', {
    value: true
});

exports['default'] = emitClass;

var _rx = require('rx');

var _rx2 = _interopRequireDefault(_rx);

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _members = require('./members');

var _members2 = _interopRequireDefault(_members);

var _inheritance = require('./inheritance');

var _inheritance2 = _interopRequireDefault(_inheritance);

var _concatIfAny = require('../concatIfAny');

var _concatIfAny2 = _interopRequireDefault(_concatIfAny);

var _FormattingToken = require('../FormattingToken');

var _FormattingToken2 = _interopRequireDefault(_FormattingToken);

var literal = _rx2['default'].Observable.of;

function emitClass(node, nodeMapper) {
    var isNoInterfaceObject = node.extAttrs.some(function (subnode) {
        return subnode.name === 'NoInterfaceObject';
    });
    if (isNoInterfaceObject) {
        (0, _assert2['default'])(!node.inheritance, 'Type ' + node.name + ' [NoInterfaceObject] cannot have inheritance information; Should have been purged in preprocessAst');
        (0, _assert2['default'])(!node.extAttrs.some(function (subnode) {
            return subnode.name === 'Constructor';
        }), 'Type ' + node.name + ' has illegal combination: [NoInterfaceObject] and [Constructor]');
        (0, _assert2['default'])(!node.members.some(function (subnode) {
            return subnode.name === 'constructor';
        }), 'Type ' + node.name + ' has illegal combination: [NoInterfaceObject] and constructor');
    }

    return literal('/* WebIDL: ' + (node.partial ? 'partial ' : '') + '' + node.type + ' ' + node.name + ' */').concat(literal(_FormattingToken2['default'].newlineIndent)).concat(literal(isNoInterfaceObject ? 'type ' + node.name + ' = ' : 'declare class ' + node.name + ' ')).concat((0, _concatIfAny2['default'])((0, _inheritance2['default'])(node), literal(' '))).concat(literal(_FormattingToken2['default'].openBrace)).concat((0, _members2['default'])(_rx2['default'].Observable.from(node.members), nodeMapper)).concat(literal(_FormattingToken2['default'].closeBrace), literal(isNoInterfaceObject ? ';' : ''));
}

module.exports = exports['default'];
//# sourceMappingURL=class.js.map