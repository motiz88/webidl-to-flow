/* @flow */

// import Rx from 'rx';
import assert from 'assert';
import translateInterface from './interface';
import notImplemented from './notImplemented';
import translateCallbackInterface from './callbackInterface';
import translateException from './exception';
import translateEnum from './enum';
import translateTypedef from './typedef';
import translateCallback from './callback';
import translateDictionary from './dictionary';
import translateNamedConstructor from './namedConstructor';

// `implements` declarations are removed by preprocessAst, so just stub it out here
import translateImplements from './notImplemented';

export
default

function translateRoot(node: IdlRootDefinition): Rx.Observable {
    assert(node.type === 'interface' || node.type === 'callback interface' || node.type === 'exception' || node.type === 'enum' || node.type === 'typedef' || node.type === 'callback' || node.type === 'dictionary' || node.type === 'implements'
           || node.type === 'named constructor',
        `Expected IdlRootDefinition, found ${node.type}`);
    switch (node.type) {
        case 'interface':
            return translateInterface((node: IdlInterface));
        case 'callback interface':
            return translateCallbackInterface((node: IdlCallbackInterface));
        case 'exception':
            return translateException((node: IdlCallbackInterface));
        case 'enum':
            return translateEnum((node: IdlEnum));
        case 'typedef':
            return translateTypedef((node: IdlTypedef));
        case 'callback':
            return translateCallback((node: IdlCallback));
        case 'dictionary':
            return translateDictionary((node: IdlDictionary));
        case 'implements':
            return translateImplements((node: IdlImplements));
        case 'named constructor':
            // These are inserted by preprocessAst, NOT by webidl2.js
            return translateNamedConstructor(node);
        default:
            return notImplemented(node);
    }
    // IdlInterface | IdlCallbackInterface | IdlException | IdlEnum | IdlTypedef | IdlCallback | IdlDictionary | IdlImplements;
}