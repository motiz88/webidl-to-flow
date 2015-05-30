'use strict';

var _Object$defineProperty = require('babel-runtime/core-js/object/define-property')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

_Object$defineProperty(exports, '__esModule', {
    value: true
});

exports['default'] = rxGlob;

var _rx = require('rx');

var _rx2 = _interopRequireDefault(_rx);

var _glob = require('glob');

var _glob2 = _interopRequireDefault(_glob);

var rxGlobArray = _rx2['default'].Observable.fromNodeCallback(_glob2['default']);

function rxGlob() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    return rxGlobArray.apply(undefined, args).flatMap(_rx2['default'].Observable.from);
}

rxGlob.hasMagic = _glob2['default'].hasMagic;
module.exports = exports['default'];
//# sourceMappingURL=rx-glob.js.map