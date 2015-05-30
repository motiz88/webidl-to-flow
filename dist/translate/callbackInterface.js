/* @flow */

'use strict';

var _Object$defineProperty = require('babel-runtime/core-js/object/define-property')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

_Object$defineProperty(exports, '__esModule', {
    value: true
});

exports['default'] = translateCallbackInterface;

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _interfaceMember = require('./interfaceMember');

var _interfaceMember2 = _interopRequireDefault(_interfaceMember);

var _rx = require('rx');

var _rx2 = _interopRequireDefault(_rx);

var _emitMembers = require('../emit/members');

var _emitMembers2 = _interopRequireDefault(_emitMembers);

var _arrayUnique = require('array-unique');

var _arrayUnique2 = _interopRequireDefault(_arrayUnique);

var _functionType = require('./functionType');

var _functionType2 = _interopRequireDefault(_functionType);

var _FormattingToken = require('../FormattingToken');

var _FormattingToken2 = _interopRequireDefault(_FormattingToken);

var literal = _rx2['default'].Observable.of;

function translateCallbackInterface(node) {
    (0, _assert2['default'])(node.type === 'callback interface', 'Expected IdlCallbackInterface, found ' + node.type);
    (0, _assert2['default'])(!node.inheritance, 'IdlCallbackInterface should not have inheritance info here (AST should be preprocessed with flattenCallbackInterfaces)');
    var decl = literal('/* WebIDL: ' + (node.partial ? 'partial ' : '') + '' + node.type + ' ' + node.name + ' */', _FormattingToken2['default'].newlineIndent, 'type ' + node.name + ' = ', _FormattingToken2['default'].openBrace).concat((0, _emitMembers2['default'])(_rx2['default'].Observable.from(node.members), _interfaceMember2['default'])).concat(literal(_FormattingToken2['default'].closeBrace));

    // Is this a single operation callback interface?
    if (!node.members.some(function (subnode) {
        return subnode.type === 'attribute';
    })) {
        var regops = node.members.filter(function (subnode) {
            return subnode.type === 'operation' && !subnode['static'] && subnode.name;
        });
        var opname = (0, _arrayUnique2['default'])(regops.map(function (op) {
            return op.name;
        }));
        if (opname.length === 1) {
            decl = decl.concat(_rx2['default'].Observable.from(regops).concatMap(function (op) {
                return literal(' | (').concat((0, _functionType2['default'])(op), literal(')'));
            }));
        }
    }
    return decl.concat(literal(';'));
}

module.exports = exports['default'];
//# sourceMappingURL=callbackInterface.js.map