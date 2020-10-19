class MyAngularclass{   

    constructor(private fname:string,private id:number){
    }
    display(){
        console.log(`
        --------------------------
        First name:: ${this.fname}
        id :: ${this.id}
        `)
    }


}

var myobj=new MyAngularclass('sumit',8);
myobj.display();