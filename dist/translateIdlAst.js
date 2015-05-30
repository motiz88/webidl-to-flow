/* @flow */

'use strict';

var _Object$defineProperty = require('babel-runtime/core-js/object/define-property')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

_Object$defineProperty(exports, '__esModule', {
    value: true
});

exports['default'] = translateIdlAst;

var _rx = require('rx');

var _rx2 = _interopRequireDefault(_rx);

var _translateRoot = require('./translate/root');

var _translateRoot2 = _interopRequireDefault(_translateRoot);

var _preprocessAst = require('./preprocessAst');

var _preprocessAst2 = _interopRequireDefault(_preprocessAst);

var _FormattingToken = require('./FormattingToken');

var _FormattingToken2 = _interopRequireDefault(_FormattingToken);

var _postprocessTokens = require('./postprocessTokens');

var _postprocessTokens2 = _interopRequireDefault(_postprocessTokens);

function translateIdlAst(ast) {
    return (0, _preprocessAst2['default'])(_rx2['default'].Observable.from(ast)).concatMap(function (root) {
        return (0, _translateRoot2['default'])(root).concat(_rx2['default'].Observable.of('\n\n'));
    })['let'](_postprocessTokens2['default']);
}

module.exports = exports['default'];
//# sourceMappingURL=translateIdlAst.js.map