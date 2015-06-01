'use strict';

var _Object$defineProperty = require('babel-runtime/core-js/object/define-property')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

_Object$defineProperty(exports, '__esModule', {
    value: true
});

exports['default'] = postprocessTokens;

var _FormattingToken = require('../FormattingToken');

var _FormattingToken2 = _interopRequireDefault(_FormattingToken);

var _util = require('util');

var _util2 = _interopRequireDefault(_util);

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _rx = require('rx');

var _rx2 = _interopRequireDefault(_rx);

function postprocessTokens(tokens) {
    return _rx2['default'].Observable.create(function (observer) {
        var commentDepth = 0;
        var indentDepth = 0;
        var indentElement = '    ';
        var lineStartFlag = true;

        var handleLineStart = function handleLineStart() {
            if (lineStartFlag) {
                for (var i = 0; i < indentDepth; ++i) observer.onNext(indentElement);
                lineStartFlag = false;
            }
        };
        return tokens.concatMap(function (token) {
            switch (token) {
                case _FormattingToken2['default'].openBrace:
                    return _rx2['default'].Observable.of('{', _FormattingToken2['default'].indentMore);
                case _FormattingToken2['default'].closeBrace:
                    return _rx2['default'].Observable.of(_FormattingToken2['default'].indentLess, '}');
                default:
                    return _rx2['default'].Observable.of(token);
                    // default: return `/**${token.code}**/`;
            }
        }).forEach(function (token) {
            if (token === _FormattingToken2['default'].newlineIndent) {
                if (!lineStartFlag) observer.onNext('\n');
                lineStartFlag = true;
            } else if (token === _FormattingToken2['default'].indentMore) {
                if (!lineStartFlag) observer.onNext('\n');
                lineStartFlag = true;
                ++indentDepth;
            } else if (token === _FormattingToken2['default'].indentLess) {
                if (!lineStartFlag) observer.onNext('\n');
                lineStartFlag = true;
                --indentDepth;
            } else if (token === _FormattingToken2['default'].enterComment) {
                handleLineStart();
                if (commentDepth === 0) observer.onNext('/* ');else observer.onNext('/^ ');
                ++commentDepth;
            } else if (token === _FormattingToken2['default'].exitComment) {
                handleLineStart();
                if (commentDepth === 1) observer.onNext(' */');else observer.onNext(' ^/');
                --commentDepth;
            } else if (typeof token === 'string') {
                if (token.length) handleLineStart();
                observer.onNext(token);
            } else (0, _assert2['default'])(false, 'Invalid token: ' + _util2['default'].inspect(token));
        }, function (err) {
            return observer.onError(err);
        }, function () {
            return observer.onCompleted();
        });
    });
}

module.exports = exports['default'];
//# sourceMappingURL=index.js.map