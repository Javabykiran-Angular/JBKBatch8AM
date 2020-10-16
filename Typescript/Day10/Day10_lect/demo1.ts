//Classes in Typescript,interface,inheritance function overriding

export class Myclass{
   private fname:string; //It is property
    lname:string;  //It is property
   protected id:number;      //It is property

    constructor(myfname:string,mylname:string,myid:number){
        this.fname=myfname;
        this.lname=mylname;
        this.id=myid;
    }
    
    display(){
        console.log(`
        ----------Display the Data-------
          First Name :: ${this.fname}
          Last Name :: ${this.lname}
          ID ::        ${this.id}  
        `);
    }    

}

// var myobj=new Myclass("Sumit","Raokhande",1);
// myobj.display();
// class myclass2{

// }

export const pi=3.14;
export function add(a:number,b:number){
    return(a+b);
}



