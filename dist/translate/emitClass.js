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

var _emitMembers = require('./emitMembers');

var _emitMembers2 = _interopRequireDefault(_emitMembers);

var _emitInheritance = require('./emitInheritance');

var _emitInheritance2 = _interopRequireDefault(_emitInheritance);

var literal = _rx2['default'].Observable.of;

function emitClass(node, nodeMapper) {
        return literal('\n/* WebIDL: ' + (node.partial ? 'partial ' : '') + '' + node.type + ' ' + node.name + ' */\ndeclare class ' + node.name).concat((0, _emitInheritance2['default'])(node)).concat(literal(' {\n')).concat((0, _emitMembers2['default'])(_rx2['default'].Observable.from(node.members), nodeMapper)).concat(literal('}\n'));
}

module.exports = exports['default'];
//# sourceMappingURL=emitClass.js.map