'use strict';

var _Object$defineProperty = require('babel-runtime/core-js/object/define-property')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

_Object$defineProperty(exports, '__esModule', {
    value: true
});

exports['default'] = propagateMembersThroughHierarchy;

var _rx = require('rx');

var _rx2 = _interopRequireDefault(_rx);

var _extractDag = require('./extractDag');

var _extractDag2 = _interopRequireDefault(_extractDag);

/// propagateMembersThroughHierarchy walks the graph of `implements` statements and
/// inheritance and copies members from parent (or implemented interface) to child
/// (or implementing interface).
/// The resulting sequence contains no IdlImplements nodes.

function propagateMembersThroughHierarchy(astRoots) {
    return astRoots.toArray().concatMap(function (roots) {
        var implementsNodes = roots.filter(function (node) {
            return node.type === 'implements';
        });
        var dag = (0, _extractDag2['default'])(implementsNodes, function (node) {
            return node[node.type === 'implements' ? 'target' : 'name'];
        }, function (node) {
            return node[node.type === 'implements' ? 'implements' : 'inheritance'];
        }, 'interface hierarchy');

        var restNodesMap = {};

        var nodeById = function nodeById(id) {
            if (id in restNodesMap) return restNodesMap[id];
            var matches = roots.filter(function (node) {
                return node.name === id;
            });
            if (matches.length === 0) throw new Error('Cannot implement/inherit ' + id + '; Name not found');
            if (matches.length > 1) throw new Error('Cannot implement/inherit ' + id + '; Ambiguous identifier');

            restNodesMap[id] = matches[0];
            return restNodesMap[id];
        };

        dag.order.forEach(function (id) {
            dag.edges[id].forEach(function (implementedId) {
                try {
                    nodeById(id).members = nodeById(id).members.concat(nodeById(implementedId).members);
                } catch (e) {
                    if (!e.message || e.message.indexOf('Name not found') === -1) throw e;
                }
            });
        });

        var restNodes = roots.filter(function (node) {
            return node.type !== 'implements' || !(node.target in restNodesMap) || !(node['implements'] in restNodesMap);
        });

        return _rx2['default'].Observable.from(restNodes);
    });
}

module.exports = exports['default'];
//# sourceMappingURL=propagateMembersThroughHierarchy.js.map