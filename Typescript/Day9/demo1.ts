//Object--> Json -> java script object Notation
//object is in key & value format
// to define object use {} bracket

// var obj={
//     "fname":'Sumit',
//     "lname":'Raokhande',
//     "id":3,
//     "status":true
// }

var obj={
    fname:'Sumit',
    lname:'Raokhande',
    id:3,
    status:true
}
//to parse the object with 2 ways
//1 dot notation
//2 square bracket notation

//dot notation
// console.log("------------- dot notation--------");
// console.log("First name "+obj.fname);
// console.log("last name "+obj.lname);
// console.log("id  "+obj.id);
// console.log("status  "+obj.status);
// console.log("------------- Square Bracket--------");
// //2 square bracket notation
// console.log("First name "+obj['fname']);
// console.log("last name "+obj["id"]);

var obj1={
    fname:'Sumit',
    lname:'Raokhande',
    country:{
        cid:1,
        cname:"India"
    },
    status:'Active'

}

// console.log(`
//    ---------------------------------
//    Country name :: ${obj1.country.cname} 
//    ----------------------------------
// `);
// console.log(`
//    ---------------Square bracket------------------
//    Country name :: ${obj1['country']['cname']} 
//    ----------------------------------
// `);

//Array of object
var obj2=[
    {
        prodname:"Samsung",
        prize:20000,
        description:'Good'
    },
    {
        prodname:"Motorola",
        prize:10000,
        description:'Very Good'
    },
    {
        prodname:"LG",
        prize:15000,
        description:'Lifes good'
    }
];

// console.log(`
//     Product name: ${obj2[1].prodname}
//     prize: ${obj2[1].prize}
//     Description: ${obj2[1].description}
// `);

// for (let i = 0; i < obj2.length; i++) {
//     console.log(`
//     ---------------------------------------
//     Product name: ${obj2[i].prodname}
//     prize: ${obj2[i].prize}
//     Description: ${obj2[i].description}
// `);   
// }
var a='sumit';
var b='raokhande';

var obj3={
    fname:'dtgsr',
    lname:'',
    id:0
};

 obj3.fname="Sumit";
// obj3.lname='Raokhande'

obj3.fname=a;
console.log("fname:: "+obj3.fname);

var obj4=[];
obj4=[3,4,5];
// obj4=[
//     {

//     },
//     {

//     }
// ]

var obj5={};
obj5=[
    {
    },
    {
    }
]











