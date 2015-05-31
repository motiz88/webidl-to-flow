/* @flow */

import Rx from 'rx';
import WebIDL2 from '@motiz88/webidl2';

export
default
function parseIdlSource(idlSource: string): Rx.Observable {
	return Rx.Observable.create(observer => {
		try {
			observer.onNext(WebIDL2.parse(idlSource, {allowNestedTypedefs: true}));
		} catch(e) {
			observer.onError(e);
		}
		observer.onCompleted();
	});
}
