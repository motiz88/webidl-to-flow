/* @flow */
import fs from 'fs';
import Rx from 'rx';
import RxNode from 'rx-node';
import parseIdlSource from '../../parseIdlSource';
import translateIdlAst from '../../translateIdlAst';

import rxGlob from '../../rx-glob';
import stream from 'stream';
import request from 'request';
import url from 'url';

var rxReadFile = Rx.Observable.fromNodeCallback(fs.readFile);

export
default

function processIdlFiles(inputs: Array < string > ): void {
    Rx.Observable.from(inputs)
        .concatMap(input => {
            if (input === '-')
                return Rx.Observable.of(process.stdin);
            else {
                var inputUrl = url.parse(input);
                if (inputUrl.protocol === 'http:' || inputUrl.protocol === 'https:') {
                    var buf = new stream.PassThrough();
                    request(input).pipe(buf);
                    return Rx.Observable.of(buf);
                }
            }
            return (rxGlob.hasMagic(input) ? rxGlob(input) : Rx.Observable.of(input))
                .map(fs.createReadStream);
        })
        .concatMap(readable => {
            readable.setEncoding('utf8');
            return RxNode.fromReadableStream(readable)
                .toArray().map(arr => arr.join(""));
        })
        // .concatMap(filename => rxReadFile(filename, {
        //     encoding: 'utf8'
        // }))
        .concatMap(parseIdlSource)
        .concatMap(translateIdlAst)
        .forEach(s => process.stdout.write(s), err => console.error(err.stack || err), () => process.stdout.write('\n\n'));
}