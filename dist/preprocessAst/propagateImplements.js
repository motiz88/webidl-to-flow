'use strict';

var _Object$defineProperty = require('babel-runtime/core-js/object/define-property')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

_Object$defineProperty(exports, '__esModule', {
    value: true
});

exports['default'] = propagateImplements;

var _rx = require('rx');

var _rx2 = _interopRequireDefault(_rx);

var _extractDag = require('./extractDag');

var _extractDag2 = _interopRequireDefault(_extractDag);

/// propagateImplements walks the graph of `implements` statements and copies members from parent to child.
/// The resulting sequence contains no IdlImplements nodes.

function propagateImplements(astRoots) {
    return astRoots.toArray().concatMap(function (roots) {
        var dag = (0, _extractDag2['default'])(roots.filter(function (node) {
            return node.type === 'implements';
        }), 'target', 'implements', 'implements statements');

        var restNodes = roots.filter(function (node) {
            return node.type !== 'implements';
        });
        var restNodesMap = {};

        var nodeById = function nodeById(id) {
            if (id in restNodesMap) return restNodesMap[id];
            var matches = roots.filter(function (node) {
                return node.name === id;
            });
            if (matches.length === 0) throw new Error('No definition seen for implemented interface ' + id);
            if (matches.length > 1) throw new Error('Ambiguous reference to implemented interface ' + id + '; multiple definitions seen');

            restNodesMap[id] = matches[0];
            return restNodesMap[id];
        };

        dag.order.forEach(function (id) {
            dag.edges[id].forEach(function (implementedId) {
                nodeById(id).members = nodeById(id).members.concat(nodeById(implementedId).members);
            });
        });

        return _rx2['default'].Observable.from(restNodes);
    });
}

module.exports = exports['default'];
//# sourceMappingURL=propagateImplements.js.map