'use strict';

var _Object$defineProperty = require('babel-runtime/core-js/object/define-property')['default'];

var _Object$assign = require('babel-runtime/core-js/object/assign')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

_Object$defineProperty(exports, '__esModule', {
    value: true
});

exports['default'] = concretizeNamedConstructors;

var _rx = require('rx');

var _rx2 = _interopRequireDefault(_rx);

var _clone = require('clone');

var _clone2 = _interopRequireDefault(_clone);

/// concretizeNamedConstructors collects [NamedConstructor] attributes from interfaces and dictionaries
/// and inserts equivalent {type: 'named constructor'} nodes into the AST stream.

function concretizeNamedConstructors(astRoots) {
    return astRoots.concatMap(function (root) {
        var isCloned = false;

        function cloneOnce() {
            if (!isCloned) {
                root = (0, _clone2['default'])(root);
                isCloned = true;
            }
        }
        if (root.type === 'interface' || root.type === 'dictionary') {
            var namedCtorAttrs = root.extAttrs.filter(function (attr) {
                return attr.name === 'NamedConstructor';
            });
            if (namedCtorAttrs.length) {
                cloneOnce();
                root.extAttrs = root.extAttrs.filter(function (attr) {
                    return attr.name !== 'NamedConstructor';
                });
                return _rx2['default'].Observable.of(root).concat(_rx2['default'].Observable.from(namedCtorAttrs.map(function (attr) {
                    return _Object$assign({
                        type: 'named constructor',
                        idlType: root.name }, attr, {
                        name: attr.rhs.value,
                        arguments: attr.arguments || [],
                        rhs: undefined });
                })));
            }
        }
        return _rx2['default'].Observable.of(root);
    });
}

module.exports = exports['default'];
//# sourceMappingURL=concretizeNamedConstructors.js.map