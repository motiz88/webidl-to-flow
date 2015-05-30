import concretizeNamedConstructors from './concretizeNamedConstructors';
import concretizeConstructors from './concretizeConstructors';
// import propagateImplements from './propagateImplements';
import propagateMembersThroughHierarchy from './propagateMembersThroughHierarchy';
import flattenCallbackInterfaces from './flattenCallbackInterfaces';
import purgeNoInterfaceObjects from './purgeNoInterfaceObjects';
import mergePartials from './mergePartials';

export
default

function preprocessAst(astRoots: Rx.Observable): Rx.Observable {
    return astRoots
    	.let(mergePartials)
    	.let(flattenCallbackInterfaces)
    	.let(propagateMembersThroughHierarchy)
    	.let(purgeNoInterfaceObjects)
        // .let(propagateImplements)
        .let(concretizeConstructors)
        .let(concretizeNamedConstructors);
}