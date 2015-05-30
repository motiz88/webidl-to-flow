import t from '../FormattingToken';
import util from 'util';
import assert from 'assert';
import Rx from 'rx';

export
default

function postprocessTokens(tokens: Rx.Observable): Rx.Observable {
    return Rx.Observable.create(observer => {

        var depth = 0;
        var indentElement = "    ";
        var lineStartFlag = true;

        var handleLineStart = () => {
            if (lineStartFlag) {
                for (var i = 0; i < depth; ++i)
                    observer.onNext(indentElement);
                lineStartFlag = false;
            }
        };
        return tokens
            .concatMap(token => {
                switch (token) {
                    case t.openBrace:
                        return Rx.Observable.of('{', t.indentMore);
                    case t.closeBrace:
                        return Rx.Observable.of(t.indentLess, '}');
                    default:
                        return Rx.Observable.of(token);
                        // default: return `/**${token.code}**/`;
                }
            })
            .forEach(token => {
                    if (token === t.newlineIndent) {
                        if (!lineStartFlag)
                            observer.onNext('\n');
                        lineStartFlag = true;
                    } else if (token === t.indentMore) {
                        if (!lineStartFlag)
                            observer.onNext('\n');
                        lineStartFlag = true;
                        ++depth;
                    } else if (token === t.indentLess) {
                        if (!lineStartFlag)
                            observer.onNext('\n');
                        lineStartFlag = true;
                        --depth;
                    } else if (typeof token === 'string') {
                        if (token.length)
                            handleLineStart();
                        observer.onNext(token);
                    } else
                        assert(false, 'Invalid token: ' + util.inspect(token));
                },
                err => observer.onError(err),
                () => observer.onCompleted()
            );
    });
}