/* @flow */
export
default

function concatIfAny(a: Rx.Observable, b: Rx.Observable): Rx.Observable {
    return a.let(a1 =>
    	a1.some().concatMap(nonempty => nonempty ? a1.concat(b) : a1)
    );
}