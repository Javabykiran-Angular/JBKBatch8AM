

//as syntax

var a1:any;

var temp= (a1 as string);
//angle bracket

var a2:any;
var temp1=(<string> a2);
// temp1='Sumit';
// console.log("Temp1 is :: "+typeof temp1);
// console.log("Temp1 is :: "+temp1);


//var, const,let
//var - its scope is global
const a=10;
//const has global scope once we assign a value as constant it can not change
// angular.io- document 

//operator
// Airthmatic(+,-,=,/,%),assignment(=),bitwise(&,|,^,!),logical(&&,||) ,relational ,pre incre/dec(++/--),post incrt/dec,ternery ,conditional 

var temp3=4<6?'hi':'bye';
// console.log("value of temp3 is :: "+temp3);

//control statement & loop 
//if,nested if else,if-else,break,contine,
//switch
//loop
//while,for,do-while
var temp2=3
// if(temp2<4){
//     console.log("Condition is true..");
// }else if(temp2==3){
//     console.log("Condition is ==..");
// }else{
//     console.log("Condition is false..");
// }

var choice=5;
// switch(choice){
//     case 1:console.log("You are in case 1");    
//     break;

//     case 2: console.log("you are in case 2");
//     break;

        

//     default :console.log('You are in Default case');
//     break;
// }

// while(temp2<4){
//     console.log('dgfvamsdcvmbd');
// }

do{
    console.log("Choice is "+choice);
    choice--;
}while(choice!=0);

console.log("======================================");
for(let i=0;i<4;i++){
    console.log("Value of I is "+i);
}


// console.log(i);

//let has scope is within the block i.e {}


// for(var i=0;i<4;i++){
//     console.log("Value of I is "+i);
// }
// console.log(i);

console.log("----------------------------------");




