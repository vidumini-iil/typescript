//Spread is ES6 feature to merge objects
//Big "T" is a default name for generic
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var addddId = function (obj) {
    var id = Math.random().toString(16);
    return __assign(__assign({}, obj), { id: id });
};
/****** Important: We must provide genetic type if there is no default ******/
var personnn = {
    name: "Jack",
    data: {
        meta: "foo"
    }
};
var personnn2 = {
    name: "Prabath",
    data: ["Amila", "Prabath", "Vidumini", "Sithara"]
};
/****** Explicit declarations are easier to read ******/
var resulttt = adddId(personnn);
console.log("result ", resulttt);
