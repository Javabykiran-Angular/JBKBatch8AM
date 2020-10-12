//Fat Arrow Function/Arrow Function
//It is Adv. version of Annyno. Function

var temp1=()=>{
    console.log("Fat Arrow / Arrow Funct. of basic type funct 1");
}

temp1();

var temp2=(a:number,b:number):number => {
    return (a*b);
}

console.log("Multiplication is :: "+temp2(5,5));
var a=6;
var b=6;
console.log("Multiplication is :: "+temp2(a,b));

//Optional Parameter Function

function add(a:number,b?:number){ 
    
    if(b==undefined){
        console.log("Value of A is "+a);
        
        console.log("Addition is "+(a+4)); //NAN
    }else{
        console.log("Value of A is "+a);
        console.log("Value of B is "+b);
        console.log("Addition is "+(a+b)); //NAN
    }
    
    
}

console.log("-----------------------------------");
add(2,3);
console.log("-----------------------------------");
add(4);

//default parameter function

var temp3=(a:number,b:number=5,c?:number)=>{
    console.log("Value of A is "+a);
    console.log("Value of B is "+b);
    console.log("Value of C is "+c)
    console.log("Addition is "+(a+b));
}

// console.log("-----------------------------------");
// temp3(2,10);
// console.log("-----------------------------------");
// temp3(6);
console.log("------------With value c---------------------");
temp3(11);
console.log("------------With value c---------------------");
temp3(22,11,33);
console.log("------------With value c & B---------------------");
temp3(22,33);







