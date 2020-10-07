console.log('Welcome to All Angular Session');

var a;
var a_b;
var a$b;
// data type number(int,float,double,long),
// string("dhfkhs",'msgdgad',"g"),
//boolean(true,false),
//any (number,string,boolean)
// Misce (undefined,null) it acts as value,it is used as value data type
//void - it does not return or point any thing

var a1:number=10; //forward declaration & defination

var a2=10;
var a3='Sumit';
var a4; //default data type is any It is declaration
a4=10;
a4='sumit';
a4=true;
var a5:any;
var a6:number; //default value is undefined
console.log('Value of a6 is :: '+a6);
console.log('Value of a5 is :: '+a5);
console.log('Value of a4 is :: '+a4);
console.log("a4 Whose data type is ===>> "+typeof a4);
console.log("a4 Whose data type is ===>> "+typeof(a4));

//type assertion
// var a7:number;
var a7:any;
//you can achieve type assertion 
//1 angle bracket
// 2 as syntax

// How to use angle bracket

    // var temp= (<string>a7);
    // var temp=(<any>a7);
    var temp=(<string>a7); 
       
    
// as syntax

var a8; // default data type & value is undefined
console.log("Default value of a8 is "+a8);
console.log("Default data type of a8 is "+ typeof(a8));

var a9;
a9='sumit';
a9=10;



























