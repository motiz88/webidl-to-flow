'use strict';

var _Object$defineProperty = require('babel-runtime/core-js/object/define-property')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

_Object$defineProperty(exports, '__esModule', {
    value: true
});

exports['default'] = hoistNestedTypedefs;

var _rx = require('rx');

var _rx2 = _interopRequireDefault(_rx);

var _arrayUnique = require('array-unique');

var _arrayUnique2 = _interopRequireDefault(_arrayUnique);

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

/// hoistNestedTypedefs extracts all `typedef`s which are interface members, and
/// moves them before their containing interfaces.
/// The resulting sequence contains no nested typedefs.

function hoistNestedTypedefs(astRoots) {
    return astRoots.concatMap(function (root) {
        if (!('members' in root)) return _rx2['default'].Observable.of(root);

        var typedefs = root.members.filter(function (node) {
            return node.type === 'typedef';
        });
        if (typedefs.length) root.members = root.members.filter(function (node) {
            return node.type !== 'typedef';
        });
        return _rx2['default'].Observable.from(typedefs).concat(_rx2['default'].Observable.of(root));
    });
}

module.exports = exports['default'];
//# sourceMappingURL=hoistNestedTypedefs.js.map