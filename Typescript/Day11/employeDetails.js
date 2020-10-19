"use strict";
exports.__esModule = true;
exports.EmployeDetails = void 0;
var department_1 = require("./department");
var EmployeDetails = /** @class */ (function () {
    function EmployeDetails(fname, lname, sal, role) {
        this.fname = fname;
        this.lname = lname;
        this.salary = sal;
        this.deptRef = new department_1.Department(role);
    }
    EmployeDetails.prototype.dispaly = function () {
        console.log("\n        ========Employe Details=============\n        First name :: " + this.fname + "\n        Last Name :: " + this.lname + "\n        Salary :: " + this.salary + "\n        Role is ::" + this.deptRef.getRole() + " \n        ");
    };
    return EmployeDetails;
}());
exports.EmployeDetails = EmployeDetails;
