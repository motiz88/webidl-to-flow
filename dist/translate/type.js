/* @flow */

'use strict';

var _Object$defineProperty = require('babel-runtime/core-js/object/define-property')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

_Object$defineProperty(exports, '__esModule', {
    value: true
});

exports['default'] = translateType;

var _rx = require('rx');

var _rx2 = _interopRequireDefault(_rx);

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _unionType = require('./unionType');

var _unionType2 = _interopRequireDefault(_unionType);

var _arrayType = require('./arrayType');

var _arrayType2 = _interopRequireDefault(_arrayType);

var _dataPrimitiveTypes = require('../data/primitiveTypes');

var _dataPrimitiveTypes2 = _interopRequireDefault(_dataPrimitiveTypes);

// import notImplemented from './notImplemented';

var literal = _rx2['default'].Observable.of;

function translateType(_x) {
    var _again = true;

    _function: while (_again) {
        var node = _x;
        encloseUnion = decl = undefined;
        _again = false;

        (0, _assert2['default'])(node);
        if (typeof node === 'string') {
            if (node in _dataPrimitiveTypes2['default']) return literal(_dataPrimitiveTypes2['default'][node]);else return literal(node);
        }

        var encloseUnion = false;

        var decl = _rx2['default'].Observable.empty();

        if (node.nullable) {
            encloseUnion = true;
            decl = decl.concat(literal('?'));
        }

        if (node.union) return decl.concat((0, _unionType2['default'])(node, encloseUnion));

        if (node.array) return decl.concat((0, _arrayType2['default'])(node));

        if (node.generic) return decl.concat(translateType(node.generic), literal('<'), translateType(node.idlType), literal('>'));

        if (typeof node.idlType === 'string') {
            _x = node.idlType;
            _again = true;
            continue _function;
        } else return literal('/* ' + JSON.stringify(node) + '*/');
    }
}

module.exports = exports['default'];
//# sourceMappingURL=type.js.map