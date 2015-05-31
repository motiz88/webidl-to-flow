/* @flow */

import Rx from 'rx';
import translateRoot from './translate/root';
import preprocessAst from './preprocessAst';
import postprocessTokens from './postprocessTokens';

export
default

function translateIdlAst(ast: IdlAstArray): Rx.Observable {
    return preprocessAst(Rx.Observable.from(ast))
        .concatMap(root => translateRoot(root).concat(Rx.Observable.of('\n\n')))
        .let(postprocessTokens);
}