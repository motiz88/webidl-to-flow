'use strict';

var _Object$defineProperty = require('babel-runtime/core-js/object/define-property')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

_Object$defineProperty(exports, '__esModule', {
    value: true
});

exports['default'] = extractDag;

var _depresDistDepres = require('depres/dist/depres');

var _depresDistDepres2 = _interopRequireDefault(_depresDistDepres);

function extractDag(relationList, idOrSelector, depOrSelector, relationDescription) {
    var edges = {},
        nodes = {};
    var selectorOf = function selectorOf(keyOrSelector) {
        return typeof keyOrSelector === 'function' ? keyOrSelector : function (x) {
            return x[keyOrSelector];
        };
    };
    var idSelector = selectorOf(idOrSelector),
        depSelector = selectorOf(depOrSelector);
    relationList.forEach(function (rel) {
        var id = idSelector(rel);
        var dep = depSelector(rel);

        if (!(id in edges)) edges[id] = [];
        if (!(id in nodes)) nodes[id] = rel;
        if (dep) {
            if (!(dep in edges)) edges[dep] = [];
            edges[id].push(dep);
        }
    });
    var depResult = _depresDistDepres2['default'].resolveMap(edges);
    if (depResult.aborted) throw new Error('Circular dependency' + (relationDescription ? ' in ' + relationDescription : '') + '; Did not resolve ' + depResult.unresolved.join(', '));

    return {
        edges: edges,
        nodes: nodes,
        order: depResult.resolved
    };
}

module.exports = exports['default'];
//# sourceMappingURL=extractDag.js.map