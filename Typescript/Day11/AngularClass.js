var MyAngularclass = /** @class */ (function () {
    function MyAngularclass(fname, id) {
        this.fname = fname;
        this.id = id;
    }
    MyAngularclass.prototype.display = function () {
        console.log("\n        --------------------------\n        First name:: " + this.fname + "\n        id :: " + this.id + "\n        ");
    };
    return MyAngularclass;
}());
var myobj = new MyAngularclass('sumit', 8);
myobj.display();
