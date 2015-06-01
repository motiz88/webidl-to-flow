//import Rx from 'rx';
import clone from 'clone';
import unique from 'array-unique';
import util from 'util';
import _ from 'lodash';

function uniqueTypes(idlType)
{
    return _.uniq(idlType, false, JSON.stringify);
}

/// transformMemberLists creates distinct entries for unnamed and named special operations,
/// and then merges the signatures of unnamed indexers.
export
default

function transformMemberLists(astRoots: Rx.Observable): Rx.Observable {
    return astRoots.map(root => {
        if (root.type === 'interface') {
            var members = [];
            root.members.forEach(member => {
                if (member.getter || member.setter || member.creator || member.deleter || member.legacycaller ||
                    member.stringifier) {
                    if (member.name) {
                        members.push(Object.assign({}, member, {
                            name: null
                        }));
                        if (member.stringifier && member.name === 'toString')
                            return; // continue forEach
                    }
                }
                members.push(member);                
            });

            var isUnnamedIndexer = member => member.getter && !member.name && member.arguments && member.arguments.length === 1;
            // now unify unnamed indexers
            var indexers = members.filter(isUnnamedIndexer);
            if (indexers.length > 1) {
                members = members.filter(member => !isUnnamedIndexer(member));
                var returnType = {
                    union: true,
                    idlType: uniqueTypes(indexers.map(node => node.idlType)),
                    extAttrs: [],
                };

                var argumentExtAttrs = indexers.map(node => node.arguments[0].extAttrs);

                var argument = {
                    name: unique(indexers.map(node => node.arguments[0].name)).join('_or_'),
                    idlType: {
                        union: true,
                        idlType: uniqueTypes(indexers.map(node => node.arguments[0].idlType)),
                        extAttrs: [],
                    },
                    extAttrs: [].concat(...argumentExtAttrs),
                };

                var allExtAttrs = indexers.map(node => node.extAttrs);
                members.push({
                    name: null,
                    type: 'operation',
                    idlType: returnType,
                    getter: true,
                    arguments: [argument],
                    extAttrs: [].concat(...allExtAttrs),
                });
            }
            root.members = members;
        }
        return root;
    });
}