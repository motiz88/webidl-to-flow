'use strict';

var _Object$defineProperty = require('babel-runtime/core-js/object/define-property')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

_Object$defineProperty(exports, '__esModule', {
    value: true
});

exports['default'] = extractAcyclicRelation;

var _depresDistDepres = require('depres/dist/depres');

var _depresDistDepres2 = _interopRequireDefault(_depresDistDepres);

function extractAcyclicRelation(relationList, idOrSelector, depOrSelector, relationDescription) {
    var relationMap = {};
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

        if (!(id in relationMap)) relationMap[id] = [];
        if (dep) {
            if (!(dep in relationMap)) relationMap[dep] = [];
            relationMap[id].push(dep);
        }
    });
    var depResult = _depresDistDepres2['default'].resolveMap(relationMap);
    if (depResult.aborted) throw new Error('Circular dependency' + (relationDescription ? ' in ' + relationDescription : '') + '; Did not resolve ' + depResult.unresolved.join(', '));

    return {
        edges: relationMap,
        order: depResult.resolved
    };
}

module.exports = exports['default'];
//# sourceMappingURL=extractAcyclicRelation.js.map