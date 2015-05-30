import depres from 'depres/dist/depres';

type StringSelector = string | ((x: any) => string);

export
default

function extractDag(relationList: Array < any >, idOrSelector: StringSelector, depOrSelector: StringSelector, relationDescription ? : string): Rx.Observable {
    var edges = {}, nodes = {};
    var selectorOf = keyOrSelector => (typeof keyOrSelector === 'function' ? keyOrSelector : ((x) => x[keyOrSelector]));
    var idSelector = selectorOf(idOrSelector),
        depSelector = selectorOf(depOrSelector);
    relationList.forEach(rel => {
        var id = idSelector(rel);
        var dep = depSelector(rel);

        if (!(id in edges))
            edges[id] = [];
        if (!(id in nodes))
            nodes[id] = rel;
        if (dep) {
            if (!(dep in edges))
                edges[dep] = [];
            edges[id].push(dep);
        }
    });
    var depResult = depres.resolveMap(edges);
    if (depResult.aborted)
        throw new Error(`Circular dependency${relationDescription ? (' in ' + relationDescription) : ''}; Did not resolve ` + depResult.unresolved.join(', '));

    return {
        edges,
        nodes,
        order: depResult.resolved
    };
}