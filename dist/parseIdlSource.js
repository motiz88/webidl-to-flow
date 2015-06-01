/* @flow */

'use strict';

var _Object$defineProperty = require('babel-runtime/core-js/object/define-property')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

_Object$defineProperty(exports, '__esModule', {
    value: true
});

exports['default'] = parseIdlSource;

var _rx = require('rx');

var _rx2 = _interopRequireDefault(_rx);

var _motiz88Webidl2 = require('@motiz88/webidl2');

var _motiz88Webidl22 = _interopRequireDefault(_motiz88Webidl2);

function parseIdlSource(idlSource) {
    return _rx2['default'].Observable.create(function (observer) {
        try {
            observer.onNext(_motiz88Webidl22['default'].parse(idlSource, {
                allowNestedTypedefs: true,
                allowClass: true,
                allowExtends: true }));
        } catch (e) {
            observer.onError(e);
        }
        observer.onCompleted();
    });
}

module.exports = exports['default'];
//# sourceMappingURL=parseIdlSource.js.map