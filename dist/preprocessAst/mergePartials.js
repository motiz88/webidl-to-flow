'use strict';

var _Object$defineProperty = require('babel-runtime/core-js/object/define-property')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

_Object$defineProperty(exports, '__esModule', {
    value: true
});

exports['default'] = mergePartials;

var _rx = require('rx');

var _rx2 = _interopRequireDefault(_rx);

var _arrayUnique = require('array-unique');

var _arrayUnique2 = _interopRequireDefault(_arrayUnique);

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

/// mergePartials merges all `partial` declarations.
/// The resulting sequence contains no nodes marked `partial`.

function mergePartials(astRoots) {
    return astRoots.toArray().concatMap(function (roots) {
        var names = (0, _arrayUnique2['default'])(roots.filter(function (node) {
            return node.partial;
        }).map(function (node) {
            return node.name;
        }));
        names.forEach(function (name) {
            var mergeCandidates = roots.filter(function (node) {
                return node.name === name;
            });
            var types = (0, _arrayUnique2['default'])(mergeCandidates.map(function (c) {
                return c.type;
            }));
            (0, _assert2['default'])(types.length > 0, 'Internal error');
            (0, _assert2['default'])(types.length < 2, '' + name + ' represents incompatible declarations: ' + types.join(', '));
            var type = types[0];
            var mainCandidates = mergeCandidates.filter(function (node) {
                return !node.partial;
            });
            // assert(mainCandidates.length > 0, `No non-partial ${type} declaration found for ${name}`);
            (0, _assert2['default'])(mainCandidates.length < 2, 'Ambiguous non-partial ' + type + ' declarations found for ' + name);
            var partialNodes = mergeCandidates.filter(function (node) {
                return node.partial;
            });
            (0, _assert2['default'])(partialNodes.length > 0, 'Internal error');
            partialNodes.forEach(function (node) {
                (0, _assert2['default'])(!node.inheritance, 'Partial ' + type + ' ' + name + ' cannot inherit from ' + node.inheritance);
            });
            var mainNode = mainCandidates[0] || partialNodes[0];
            partialNodes = partialNodes.filter(function (node) {
                return node !== mainNode;
            });

            partialNodes.forEach(function (partialNode) {
                mainNode.members = mainNode.members.concat(partialNode.members);
                partialNode.members = [];
                mainNode.extAttrs = mainNode.extAttrs.concat(partialNode.extAttrs);
                partialNode.extAttrs = [];
            });

            roots = roots.filter(function (node) {
                return !partialNodes.some(function (partialNode) {
                    return partialNode === node;
                });
            });
            mainNode.partial = false;
        });

        return _rx2['default'].Observable.from(roots);
    });
}

module.exports = exports['default'];
//# sourceMappingURL=mergePartials.js.map