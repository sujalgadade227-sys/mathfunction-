// // freeze seal entries key value
// //imutable -modification are not possible
// let obj={
//     key1:"val1",
//     key2:"val2",
//     key3:"val3"
// }

// //foreach -

// // Object.freeze(obj);
// // Object.seal(obj);
// obj.key3="val99"
// obj.key4="val4"

// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));


// Object.keys(obj).forEach((val)=>{console.log(val,obj[val]);
// })

// let obj1={
//     key1:"val1",
//     key2:"val2"
// }
// let obj2={
//     key3:"val3",
//     key4:"val4"
// }

// let newobj=Object.assign(obj1,obj2)
// console.log(newobj);



// Math Object
const pi=Math.PI;
console.log(pi);
let sq=Math.sqrt(81);
console.log(sq);
let pow=Math.pow(2,4);
console.log(pow);
let a=Math.ceil(78.26); //79
console.log(a);
let b=Math.floor(78.56); //78
console.log(b);
let c=Math.round(78.26);
console.log(c);
let max=Math.max(45,6,7,89);
console.log(max);
let min=Math.min(45,6,7,89);
console.log(min);
let random=Math.random();
console.log(random);

//
console.log("OTP: "+(Math.ceil(Math.random()*10000)));
//0.023467
234
//0.12346
//1234