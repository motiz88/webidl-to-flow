import Rx from 'rx';
import unique from 'array-unique';
import assert from 'assert';
import util from 'util';
/// mergePartials merges all `partial` declarations.
/// The resulting sequence contains no nodes marked `partial`.
export
default

function mergePartials(astRoots: Rx.Observable): Rx.Observable {
    return astRoots.toArray().concatMap(roots => {
        var names = unique(roots.filter(node => node.partial).map(node => node.name));
        names.forEach(name => {
            var mergeCandidates = roots.filter(node => node.name === name);
            var types = unique(mergeCandidates.map(c => c.type));
            assert(types.length > 0, 'Internal error');
            assert(types.length < 2, `${name} represents incompatible declarations: ${types.join(', ')}`);
            var type = types[0];
            var mainCandidates = mergeCandidates.filter(node => !node.partial);
            // assert(mainCandidates.length > 0, `No non-partial ${type} declaration found for ${name}`);
            assert(mainCandidates.length < 2, `Ambiguous non-partial ${type} declarations found for ${name}`);
            var partialNodes = mergeCandidates.filter(node => node.partial);
            assert(partialNodes.length > 0, 'Internal error');
            partialNodes.forEach(node => {
                assert(!node.inheritance, `Partial ${type} ${name} cannot inherit from ${node.inheritance}`);
            });
            var mainNode = mainCandidates[0] || partialNodes[0];
            partialNodes = partialNodes.filter(node => node !== mainNode);

            partialNodes.forEach(partialNode => {
                mainNode.members = mainNode.members.concat(partialNode.members);
                partialNode.members = [];
                mainNode.extAttrs = mainNode.extAttrs.concat(partialNode.extAttrs);
                partialNode.extAttrs = [];
            });

            roots = roots.filter(node => !partialNodes.some(partialNode => partialNode === node));
            mainNode.partial = false;
        });

        return Rx.Observable.from(roots);
    });
}