import Rx from 'rx';
import unique from 'array-unique';
import assert from 'assert';

/// hoistNestedTypedefs extracts all `typedef`s which are interface members, and
/// moves them before their containing interfaces.
/// The resulting sequence contains no nested typedefs.
export
default

function hoistNestedTypedefs(astRoots: Rx.Observable): Rx.Observable {
    return astRoots.concatMap(root => {
        if (!('members' in root))
            return Rx.Observable.of(root);

        var typedefs = root.members.filter(node => node.type === 'typedef');
        if (typedefs.length)
            root.members = root.members.filter(node => node.type !== 'typedef');
        return Rx.Observable.from(typedefs).concat(Rx.Observable.of(root));
    });
}