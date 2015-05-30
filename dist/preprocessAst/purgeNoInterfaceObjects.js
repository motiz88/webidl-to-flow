'use strict';

var _Object$defineProperty = require('babel-runtime/core-js/object/define-property')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

_Object$defineProperty(exports, '__esModule', {
    value: true
});

exports['default'] = purgeNoInterfaceObjects;

var _rx = require('rx');

var _rx2 = _interopRequireDefault(_rx);

// import clone from 'clone';

/// purgeNoInterfaceObjects converts types declared with [NoInterfaceObject]
/// to typedefs (so Flow can correctly warn if they're used outside annotations).
/// This requires that we remove them from inheritance clauses, so this step
/// should run *after* propagateMembersThroughHierarchy which makes inheritance redundant.

function purgeNoInterfaceObjects(astRoots) {
    return astRoots.toArray().concatMap(function (roots) {
        roots.forEach(function (node) {
            if (node.extAttrs) {
                var remainingAttrs = node.extAttrs.filter(function (subnode) {
                    return subnode.name !== 'NoInterfaceObject';
                });
                if (remainingAttrs.length !== node.extAttrs.length) {
                    /// There's at least one [NoInterfaceObject] attached
                    //node.extAttrs = remainingAttrs;
                    roots.filter(function (otherNode) {
                        return otherNode.inheritance && otherNode.inheritance === node.name;
                    }).forEach(function (otherNode) {
                        otherNode.inheritance = null;
                    });
                }
            }
        });
        return _rx2['default'].Observable.from(roots);
    });
}

module.exports = exports['default'];
//# sourceMappingURL=purgeNoInterfaceObjects.js.map