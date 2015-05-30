/* @flow */

'use strict';

var _Object$defineProperty = require('babel-runtime/core-js/object/define-property')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

_Object$defineProperty(exports, '__esModule', {
    value: true
});

exports['default'] = emitMembers;

var _rx = require('rx');

var _rx2 = _interopRequireDefault(_rx);

var literal = _rx2['default'].Observable.of;

function emitMembers(memberNodes, nodeMapper) {
    return memberNodes.concatMap(function (subnode) {
        return literal('    ') /* indent */
        .concat(nodeMapper(subnode), literal('\n'));
    });
}

module.exports = exports['default'];
//# sourceMappingURL=emitMembers.js.map