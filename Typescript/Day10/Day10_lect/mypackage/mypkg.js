"use strict";
exports.__esModule = true;
exports.MyPkage = void 0;
var MyPkage = /** @class */ (function () {
    function MyPkage(role) {
        this.role = role;
    }
    MyPkage.prototype.display = function () {
        console.log("Role is " + this.role);
    };
    return MyPkage;
}());
exports.MyPkage = MyPkage;
