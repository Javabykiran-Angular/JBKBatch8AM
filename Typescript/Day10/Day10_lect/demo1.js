"use strict";
//Classes in Typescript,interface,inheritance function overriding
exports.__esModule = true;
exports.add = exports.pi = exports.Myclass = void 0;
var Myclass = /** @class */ (function () {
    function Myclass(myfname, mylname, myid) {
        this.fname = myfname;
        this.lname = mylname;
        this.id = myid;
    }
    Myclass.prototype.display = function () {
        console.log("\n        ----------Display the Data-------\n          First Name :: " + this.fname + "\n          Last Name :: " + this.lname + "\n          ID ::        " + this.id + "  \n        ");
    };
    return Myclass;
}());
exports.Myclass = Myclass;
// var myobj=new Myclass("Sumit","Raokhande",1);
// myobj.display();
// class myclass2{
// }
exports.pi = 3.14;
function add(a, b) {
    return (a + b);
}
exports.add = add;
