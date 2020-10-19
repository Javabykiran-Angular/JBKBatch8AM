"use strict";
exports.__esModule = true;
exports.Shape = void 0;
var Shape = /** @class */ (function () {
    function Shape() {
        console.log("You are Shape Class");
    }
    Shape.prototype.Myarea = function () {
        console.log("You are in MyArea Method of Shape Class");
    };
    return Shape;
}());
exports.Shape = Shape;
