/* @flow */

"use strict";

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _Object$defineProperty = require("babel-runtime/core-js/object/define-property")["default"];

_Object$defineProperty(exports, "__esModule", {
	value: true
});

var FormattingToken = function FormattingToken(code) {
	_classCallCheck(this, FormattingToken);

	this.code = code;
};

exports["default"] = FormattingToken;

FormattingToken.newlineIndent = new FormattingToken("newlineIndent");
FormattingToken.openBrace = new FormattingToken("openBrace");
FormattingToken.closeBrace = new FormattingToken("closeBrace");
FormattingToken.indentMore = new FormattingToken("indentMore");
FormattingToken.indentLess = new FormattingToken("indentLess");
FormattingToken.enterComment = new FormattingToken("enterComment");
FormattingToken.exitComment = new FormattingToken("exitComment");
module.exports = exports["default"];
//# sourceMappingURL=FormattingToken.js.map