/* @flow */

import Rx from 'rx';
var literal = Rx.Observable.of;

/* eslint no-use-before-define: 0 */

export
default

function emitIdentifier(name: string, options?: {forbidRename?: boolean}): Rx.Observable {
	var forbidRename = options && typeof options === 'object' && options.forbidRename;
	if (reserved.indexOf(name) === -1)
		return literal(name);
	else {
		if (forbidRename)
			throw new Error(`Cannot use ${name} as an identifier here and cannot rename`);
		return literal('_' + name);
	}
}

var reserved = [
  'abstract',
  'arguments',
  'boolean',
  'break',
  'byte',
  'case',
  'catch',
  'char',
  'class',
  'const',
  'continue',
  'debugger',
  'default',
  'delete',
  'do',
  'double',
  'else',
  'enum',
  'eval',
  'export',
  'extends',
  'false',
  'final',
  'finally',
  'float',
  'for',
  'function',
  'goto',
  'if',
  'implements',
  'import',
  'in',
  'instanceof',
  'int',
  'interface',
  'let',
  'long',
  'native',
  'new',
  'null',
  'package',
  'private',
  'protected',
  'public',
  'return',
  'short',
  'static',
  'super',
  'switch',
  'synchronized',
  'this',
  'throw',
  'throws',
  'transient',
  'true',
  'try',
  'typeof',
  'var',
  'void',
  'volatile',
  'while',
  'with',
  'yield'
];
