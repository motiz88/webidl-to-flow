'use strict';

var _Object$defineProperty = require('babel-runtime/core-js/object/define-property')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

_Object$defineProperty(exports, '__esModule', {
    value: true
});

exports['default'] = flattenCallbackInterfaces;

var _rx = require('rx');

var _rx2 = _interopRequireDefault(_rx);

// import clone from 'clone';
// import depres from 'depres/dist/depres';

var _extractDag = require('./extractDag');

var _extractDag2 = _interopRequireDefault(_extractDag);

/// flattenCallbackInterfaces walks the inheritance graph of `callback interface`s
/// and copies members from parent to child.
/// The transformed IdlCallbackInterface nodes contain no inheritance information.

function flattenCallbackInterfaces(astRoots) {

    return astRoots.toArray().concatMap(function (roots) {
        var dag = (0, _extractDag2['default'])(roots.filter(function (node) {
            return node.type === 'callback interface';
        }), 'name', 'inheritance', 'callback interface hierarchy');

        var nodeById = function nodeById(id) {
            if (id in dag.nodes) return dag.nodes[id];else throw new Error('No definition seen for implemented callback interface ' + id);
        };

        dag.order.forEach(function (id) {
            dag.edges[id].forEach(function (implementedId) {
                nodeById(id).members = nodeById(id).members.concat(nodeById(implementedId).members);
            });
            nodeById(id).inheritance = null;
        });

        return _rx2['default'].Observable.from(roots);
    });
}

module.exports = exports['default'];
//# sourceMappingURL=flattenCallbackInterfaces.js.map