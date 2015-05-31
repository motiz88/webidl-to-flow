/* @flow */
'use strict';

var _Object$defineProperty = require('babel-runtime/core-js/object/define-property')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

_Object$defineProperty(exports, '__esModule', {
    value: true
});

exports['default'] = processIdlFiles;

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _rx = require('rx');

var _rx2 = _interopRequireDefault(_rx);

var _rxNode = require('rx-node');

var _rxNode2 = _interopRequireDefault(_rxNode);

var _parseIdlSource = require('../../parseIdlSource');

var _parseIdlSource2 = _interopRequireDefault(_parseIdlSource);

var _translateIdlAst = require('../../translateIdlAst');

var _translateIdlAst2 = _interopRequireDefault(_translateIdlAst);

var _rxGlob = require('../../rx-glob');

var _rxGlob2 = _interopRequireDefault(_rxGlob);

var _stream = require('stream');

var _stream2 = _interopRequireDefault(_stream);

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

var _url = require('url');

var _url2 = _interopRequireDefault(_url);

function processIdlFiles(inputs) {
    _rx2['default'].Observable.from(inputs).concatMap(function (input) {
        if (input === '-') return _rx2['default'].Observable.of(process.stdin);else {
            var inputUrl = _url2['default'].parse(input);
            if (inputUrl.protocol === 'http:' || inputUrl.protocol === 'https:') {
                var buf = new _stream2['default'].PassThrough();
                (0, _request2['default'])(input).pipe(buf);
                return _rx2['default'].Observable.of(buf);
            }
        }
        return (_rxGlob2['default'].hasMagic(input) ? (0, _rxGlob2['default'])(input) : _rx2['default'].Observable.of(input)).map(_fs2['default'].createReadStream);
    }).concatMap(function (readable) {
        readable.setEncoding('utf8');
        return _rxNode2['default'].fromReadableStream(readable).toArray().map(function (arr) {
            return arr.join('');
        });
    }).concatMap(_parseIdlSource2['default']).concatMap(_translateIdlAst2['default']).forEach(function (s) {
        return process.stdout.write(s);
    }, function (err) {
        return console.error(err.stack || err);
    }, function () {
        return process.stdout.write('\n\n');
    });
}

module.exports = exports['default'];
//# sourceMappingURL=processIdlFiles.js.map