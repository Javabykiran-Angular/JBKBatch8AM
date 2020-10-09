add(); //call function
//function without argument & without return type
function add(){
    console.log('Addition is '+(2+2));
}
//call function
// var const let
//function with argument & without return type

function add1(a:number,b:number){
    console.log('Addition is '+(a+b));
}

//call that funct
add1(3,4);

//function without argument & with return

function add3():number {
    return (8+9);
}

var temp=add3();
console.log('Addition is '+temp);

//function with argument & & with return
var a1=10;
function add4(a:number,b:number){
    
    return (a+b);
}

var a:number=12;
var b:number=22;

// add4(a,b);

console.log("Addition is "+add4(a,b));

//annoumous function

var temp2=function (){
    console.log("Funct without name is called of type 1");
}

temp2();


























