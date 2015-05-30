//import Rx from 'rx';
import clone from 'clone';

/// concretizeConstructors transforms [Constructor] attributes on interfaces and dictionaries
/// into {type: 'operation', name: 'constructor'} member nodes.
export
default

function concretizeConstructors(astRoots: Rx.Observable): Rx.Observable {
    return astRoots.map(root => {
        var isCloned = false;

        function cloneOnce() {
            if (!isCloned) {
                root = clone(root);
                isCloned = true;
            }
        }
        if (root.type === 'interface' || root.type === 'dictionary') {
            var ctorAttrs = root.extAttrs
                .filter(attr => attr.name === 'Constructor');
            if (ctorAttrs.length) {
                cloneOnce();
                root.extAttrs = root.extAttrs.filter(attr => attr.name !== 'Constructor');
                root.members.unshift(...ctorAttrs.map(attr => Object.assign({
                    type: 'operation'
                }, attr, {
                    name: 'constructor'
                })));
            }
        }
        return root;
    });
}