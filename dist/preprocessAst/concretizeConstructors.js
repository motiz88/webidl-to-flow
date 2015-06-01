//import Rx from 'rx';
'use strict';

var _toConsumableArray = require('babel-runtime/helpers/to-consumable-array')['default'];

var _Object$defineProperty = require('babel-runtime/core-js/object/define-property')['default'];

var _Object$assign = require('babel-runtime/core-js/object/assign')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

_Object$defineProperty(exports, '__esModule', {
    value: true
});

exports['default'] = concretizeConstructors;

var _clone = require('clone');

var _clone2 = _interopRequireDefault(_clone);

/// concretizeConstructors transforms [Constructor] attributes on interfaces and dictionaries
/// into {type: 'operation', name: 'constructor'} member nodes.

function concretizeConstructors(astRoots) {
    return astRoots.map(function (root) {
        var isCloned = false;

        function cloneOnce() {
            if (!isCloned) {
                root = (0, _clone2['default'])(root);
                isCloned = true;
            }
        }
        if (root.type === 'interface' || root.type === 'dictionary') {
            var ctorAttrs = root.extAttrs.filter(function (attr) {
                return attr.name === 'Constructor';
            });
            if (ctorAttrs.length) {
                var _root$members;

                cloneOnce();
                root.extAttrs = root.extAttrs.filter(function (attr) {
                    return attr.name !== 'Constructor';
                });
                (_root$members = root.members).unshift.apply(_root$members, _toConsumableArray(ctorAttrs.map(function (attr) {
                    return _Object$assign({
                        type: 'operation'
                    }, attr, {
                        name: 'constructor',
                        idlType: 'void' });
                })));
            }
        }
        return root;
    });
}

module.exports = exports['default'];
//# sourceMappingURL=concretizeConstructors.js.map