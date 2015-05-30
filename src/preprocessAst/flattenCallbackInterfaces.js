import Rx from 'rx';
// import clone from 'clone';
// import depres from 'depres/dist/depres';
import extractDag from './extractDag';

/// flattenCallbackInterfaces walks the inheritance graph of `callback interface`s
/// and copies members from parent to child.
/// The transformed IdlCallbackInterface nodes contain no inheritance information.
export
default

function flattenCallbackInterfaces(astRoots: Rx.Observable): Rx.Observable {

    return astRoots.toArray().concatMap(roots => {
        var dag = extractDag(roots.filter(node => node.type === 'callback interface'),
            'name', 'inheritance', 'callback interface hierarchy');

        var nodeById = (id) => {
            if (id in dag.nodes)
                return dag.nodes[id];
            else
                throw new Error('No definition seen for implemented callback interface ' + id);
        };

        dag.order.forEach(id => {
            dag.edges[id].forEach(implementedId => {
                nodeById(id).members = nodeById(id).members.concat(nodeById(implementedId).members);
            });
            nodeById(id).inheritance = null;
        });


        return Rx.Observable.from(roots);
    });
}