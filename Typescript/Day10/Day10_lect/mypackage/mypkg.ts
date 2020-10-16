export class MyPkage {
    role:string;
    
    constructor(role:string){
        this.role=role;
    }
    display(num?:number){
        console.log("Role is "+this.role);
    }
}