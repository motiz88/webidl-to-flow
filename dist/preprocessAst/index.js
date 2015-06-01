'use strict';

var _Object$defineProperty = require('babel-runtime/core-js/object/define-property')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

_Object$defineProperty(exports, '__esModule', {
    value: true
});

exports['default'] = preprocessAst;

var _concretizeNamedConstructors = require('./concretizeNamedConstructors');

var _concretizeNamedConstructors2 = _interopRequireDefault(_concretizeNamedConstructors);

var _concretizeConstructors = require('./concretizeConstructors');

var _concretizeConstructors2 = _interopRequireDefault(_concretizeConstructors);

// import propagateImplements from './propagateImplements';

var _propagateMembersThroughHierarchy = require('./propagateMembersThroughHierarchy');

var _propagateMembersThroughHierarchy2 = _interopRequireDefault(_propagateMembersThroughHierarchy);

var _flattenCallbackInterfaces = require('./flattenCallbackInterfaces');

var _flattenCallbackInterfaces2 = _interopRequireDefault(_flattenCallbackInterfaces);

var _purgeNoInterfaceObjects = require('./purgeNoInterfaceObjects');

var _purgeNoInterfaceObjects2 = _interopRequireDefault(_purgeNoInterfaceObjects);

var _mergePartials = require('./mergePartials');

var _mergePartials2 = _interopRequireDefault(_mergePartials);

var _hoistNestedTypedefs = require('./hoistNestedTypedefs');

var _hoistNestedTypedefs2 = _interopRequireDefault(_hoistNestedTypedefs);

var _transformMemberLists = require('./transformMemberLists');

var _transformMemberLists2 = _interopRequireDefault(_transformMemberLists);

function preprocessAst(astRoots) {
    return astRoots['let'](_hoistNestedTypedefs2['default'])['let'](_mergePartials2['default'])['let'](_flattenCallbackInterfaces2['default'])['let'](_transformMemberLists2['default'])['let'](_propagateMembersThroughHierarchy2['default'])['let'](_purgeNoInterfaceObjects2['default'])
    // .let(propagateImplements)
    ['let'](_concretizeConstructors2['default'])['let'](_concretizeNamedConstructors2['default']);
}

module.exports = exports['default'];
//# sourceMappingURL=index.js.map