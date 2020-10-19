import { Department } from "./department";
import { Employee } from "./employe";

export class EmployeDetails implements Employee{
    fname: string;    
    lname: string;
    salary:number;
    // Department deptRef in core java
    deptRef:Department;
    
    constructor(fname:string,lname:string,sal:number,role:string){
        this.fname=fname;
        this.lname=lname;
        this.salary=sal;
        this.deptRef=new Department(role);
    }

    dispaly() {
        console.log(`
        ========Employe Details=============
        First name :: ${this.fname}
        Last Name :: ${this.lname}
        Salary :: ${this.salary}
        Role is ::${this.deptRef.getRole()} 
        `);
        
    }
    
}