import Rx from 'rx';
import extractDag from './extractDag';

/// propagateMembersThroughHierarchy walks the graph of `implements` statements and 
/// inheritance and copies members from parent (or implemented interface) to child
/// (or implementing interface).
/// The resulting sequence contains no IdlImplements nodes.
export
default

function propagateMembersThroughHierarchy(astRoots: Rx.Observable): Rx.Observable {
    return astRoots.toArray().concatMap(roots => {
        var implementsNodes = roots.filter(node => node.type === 'implements');
        var dag = extractDag(implementsNodes,
            node => node[node.type === 'implements' ? 'target' : 'name'],
            node => node[node.type === 'implements' ? 'implements' : 'inheritance'],
            'interface hierarchy');

        var restNodesMap = {};

        var nodeById = (id) => {
            if (id in restNodesMap)
                return restNodesMap[id];
            var matches = roots.filter(node => node.name === id);
            if (matches.length === 0)
                throw new Error(`Cannot implement/inherit ${id}; Name not found`);
            if (matches.length > 1)
                throw new Error(`Cannot implement/inherit ${id}; Ambiguous identifier`);

            restNodesMap[id] = matches[0];
            return restNodesMap[id];
        };

        dag.order.forEach(id => {
            dag.edges[id].forEach(implementedId => {
                try {
                    nodeById(id).members = nodeById(id).members.concat(nodeById(implementedId).members);
                } catch (e) {
                    if (!e.message || e.message.indexOf('Name not found') === -1)
                        throw e;
                }
            });
        });

        var restNodes = roots.filter(node => node.type !== 'implements' || !(node.target in restNodesMap) || !(node.implements in restNodesMap));

        return Rx.Observable.from(restNodes);
    });
}