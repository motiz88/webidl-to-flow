import Rx from 'rx';
// import clone from 'clone';

/// purgeNoInterfaceObjects converts types declared with [NoInterfaceObject]
/// to typedefs (so Flow can correctly warn if they're used outside annotations).
/// This requires that we remove them from inheritance clauses, so this step
/// should run *after* propagateMembersThroughHierarchy which makes inheritance redundant.
export
default

function purgeNoInterfaceObjects(astRoots: Rx.Observable): Rx.Observable {
    return astRoots.toArray().concatMap(roots => {
        roots.forEach(
            node => {
                if (node.extAttrs) {
                    var remainingAttrs = node.extAttrs.filter(subnode => subnode.name !== 'NoInterfaceObject');
                    if (remainingAttrs.length !== node.extAttrs.length) {
                        /// There's at least one [NoInterfaceObject] attached
                        //node.extAttrs = remainingAttrs;
                        roots.filter(otherNode => otherNode.inheritance && otherNode.inheritance === node.name)
                            .forEach(otherNode => {
                                otherNode.inheritance = null;
                            });
                    }
                }
            }
        );
        return Rx.Observable.from(roots);
    });
}