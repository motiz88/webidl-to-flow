//import Rx from 'rx';
'use strict';

var _toConsumableArray = require('babel-runtime/helpers/to-consumable-array')['default'];

var _Object$defineProperty = require('babel-runtime/core-js/object/define-property')['default'];

var _Object$assign = require('babel-runtime/core-js/object/assign')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

_Object$defineProperty(exports, '__esModule', {
    value: true
});

exports['default'] = transformMemberLists;

var _clone = require('clone');

var _clone2 = _interopRequireDefault(_clone);

var _arrayUnique = require('array-unique');

var _arrayUnique2 = _interopRequireDefault(_arrayUnique);

var _util = require('util');

var _util2 = _interopRequireDefault(_util);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function uniqueTypes(idlType) {
    return _lodash2['default'].uniq(idlType, false, JSON.stringify);
}

/// transformMemberLists creates distinct entries for unnamed and named special operations,
/// and then merges the signatures of unnamed indexers.

function transformMemberLists(astRoots) {
    return astRoots.map(function (root) {
        if (root.type === 'interface') {
            var members = [];
            root.members.forEach(function (member) {
                if (member.getter || member.setter || member.creator || member.deleter || member.legacycaller || member.stringifier) {
                    if (member.name) {
                        members.push(_Object$assign({}, member, {
                            name: null
                        }));
                        if (member.stringifier && member.name === 'toString') return; // continue forEach
                    }
                }
                members.push(member);
            });

            var isUnnamedIndexer = function isUnnamedIndexer(member) {
                return member.getter && !member.name && member.arguments && member.arguments.length === 1;
            };
            // now unify unnamed indexers
            var indexers = members.filter(isUnnamedIndexer);
            if (indexers.length > 1) {
                var _ref, _ref2;

                members = members.filter(function (member) {
                    return !isUnnamedIndexer(member);
                });
                var returnType = {
                    union: true,
                    idlType: uniqueTypes(indexers.map(function (node) {
                        return node.idlType;
                    })),
                    extAttrs: [] };

                var argumentExtAttrs = indexers.map(function (node) {
                    return node.arguments[0].extAttrs;
                });

                var argument = {
                    name: (0, _arrayUnique2['default'])(indexers.map(function (node) {
                        return node.arguments[0].name;
                    })).join('_or_'),
                    idlType: {
                        union: true,
                        idlType: uniqueTypes(indexers.map(function (node) {
                            return node.arguments[0].idlType;
                        })),
                        extAttrs: [] },
                    extAttrs: (_ref = []).concat.apply(_ref, _toConsumableArray(argumentExtAttrs)) };

                var allExtAttrs = indexers.map(function (node) {
                    return node.extAttrs;
                });
                members.push({
                    name: null,
                    type: 'operation',
                    idlType: returnType,
                    getter: true,
                    arguments: [argument],
                    extAttrs: (_ref2 = []).concat.apply(_ref2, _toConsumableArray(allExtAttrs)) });
            }
            root.members = members;
        }
        return root;
    });
}

module.exports = exports['default'];
//# sourceMappingURL=transformMemberLists.js.map