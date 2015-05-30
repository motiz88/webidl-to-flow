/* @flow */
"use strict";

var _Object$defineProperty = require("babel-runtime/core-js/object/define-property")["default"];

_Object$defineProperty(exports, "__esModule", {
    value: true
});

exports["default"] = concatIfAny;

function concatIfAny(a, b) {
    return a["let"](function (a1) {
        return a1.some().concatMap(function (nonempty) {
            return nonempty ? a1.concat(b) : a1;
        });
    });
}

module.exports = exports["default"];
//# sourceMappingURL=concatIfAny.js.map