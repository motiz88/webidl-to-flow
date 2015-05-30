import Rx from 'rx';
import extractDag from './extractDag';

/// propagateImplements walks the graph of `implements` statements and copies members from parent to child.
/// The resulting sequence contains no IdlImplements nodes.
export
default

function propagateImplements(astRoots: Rx.Observable): Rx.Observable {
    return astRoots.toArray().concatMap(roots => {
        var dag = extractDag(roots.filter(node => node.type === 'implements'),
            'target', 'implements', 'implements statements');

        var restNodes = roots.filter(node => node.type !== 'implements');
        var restNodesMap = {};

        var nodeById = (id) => {
            if (id in restNodesMap)
                return restNodesMap[id];
            var matches = roots.filter(node => node.name === id);
            if (matches.length === 0)
                throw new Error('No definition seen for implemented interface ' + id);
            if (matches.length > 1)
                throw new Error('Ambiguous reference to implemented interface ' + id + '; multiple definitions seen');

            restNodesMap[id] = matches[0];
            return restNodesMap[id];
        };

        dag.order.forEach(id => {
            dag.edges[id].forEach(implementedId => {
                nodeById(id).members = nodeById(id).members.concat(nodeById(implementedId).members);
            });
        });

        return Rx.Observable.from(restNodes);
    });
}