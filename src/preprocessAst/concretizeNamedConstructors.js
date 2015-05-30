import Rx from 'rx';
import clone from 'clone';

/// concretizeNamedConstructors collects [NamedConstructor] attributes from interfaces and dictionaries
/// and inserts equivalent {type: 'named constructor'} nodes into the AST stream.
export
default

function concretizeNamedConstructors(astRoots: Rx.Observable): Rx.Observable {
    return astRoots.concatMap(root => {
        var isCloned = false;

        function cloneOnce() {
            if (!isCloned) {
                root = clone(root);
                isCloned = true;
            }
        }
        if (root.type === 'interface' || root.type === 'dictionary') {
            var namedCtorAttrs = root.extAttrs
                .filter(attr => attr.name === 'NamedConstructor');
            if (namedCtorAttrs.length) {
                cloneOnce();
                root.extAttrs = root.extAttrs.filter(attr => attr.name !== 'NamedConstructor');
                return Rx.Observable.of(root).concat(Rx.Observable.from(namedCtorAttrs.map(attr => Object.assign({
                    type: 'named constructor',
                    idlType: root.name,
                }, attr, {
                    name: attr.rhs.value,
                    arguments: attr.arguments || [],
                    rhs: undefined,
                }))));
            }
        }
        return Rx.Observable.of(root);
    });
}