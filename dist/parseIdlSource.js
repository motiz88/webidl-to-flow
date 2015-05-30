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

var _webidl2 = require('webidl2');

var _webidl22 = _interopRequireDefault(_webidl2);

function parseIdlSource(idlSource) {
	return _rx2['default'].Observable.create(function (observer) {
		try {
			observer.onNext(_webidl22['default'].parse(idlSource, { allowNestedTypedefs: true }));
		} catch (e) {
			observer.onError(e);
		}
		observer.onCompleted();
	});
}

module.exports = exports['default'];
//# sourceMappingURL=parseIdlSource.js.map