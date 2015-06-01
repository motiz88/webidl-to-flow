/* @flow */

export default class FormattingToken {
	code: string;
	constructor(code) {
		this.code = code;
	}
	
}
FormattingToken.newlineIndent = new FormattingToken("newlineIndent");
FormattingToken.openBrace = new FormattingToken("openBrace");
FormattingToken.closeBrace = new FormattingToken("closeBrace");
FormattingToken.indentMore = new FormattingToken("indentMore");
FormattingToken.indentLess = new FormattingToken("indentLess");
FormattingToken.enterComment = new FormattingToken("enterComment");
FormattingToken.exitComment = new FormattingToken("exitComment");
