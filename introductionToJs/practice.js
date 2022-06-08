console.log("hi there!!!")  // it's just to prints out hi there
/*
 multiline comments
*/
var a;
console.log(a); // it will give undefined output
a = 10;
console.log(a);// it will give 10 as output
var b = "ravi";
console.log(b); // it will give ravi as output
console.log(1+1); // it will give 2 as output
console.log(1+1+"1"); //it will give 21 as output
console.log('1'+1+1);//it will give 111 as output
console.log(1-"1");//it will give 0 as output
const message = 'hello'; 
console.log(message); // it'll print hello
// const message = 'hello' // it'll give error bcoz const declared at once;
// message=12345;
/* Number datatypes*/
let n = 123;
n=12.345;
console.log(n);//it'll print 12.345
// specific number datatypes 
console.log(1/0);
console.log(Infinity);
console.log(NaN + 1); // output ==> NAN
console.log("not a number"/2-1); // output ==> NAN
console.log(NaN ** 0) // output ==> 1 (exception)
//BigInt
const BigInt = 9007199254740991n;
console.log(BigInt);
//String
// Simple quotes
let str = "hello";
let str1 = 'ravi';
// extended functionality ${}
let str2 =`${str},i am also string`;
console.log(str);
console.log(str1);
console.log(str2);
//console.log(`the result is ${1+2}`)
//console.log("the substraction is ${1+2}")
//Boolean(Logical type)
let ischaked = true;
console.log(ischaked);
let isGreater = 4 > 1;
console.log(isGreater);
// null ==> it's just a special value which represent nothing , empty or a value unknown
let age=null;
console.log(age);
//undefined==> it's means value not defined
// object and symbols non-premitive data types 
// used for more complex dataStructure

// type conversion 
let value = true;
value = String(value)
console.log(typeof value)
// numeric conversion
alert('6'/'2'); // output ==>3
let num = '123';
num = Number(str);
console.log(typeof num) // output ==> number
let age1 = Number("a string instead of number");
console.log(age1);// output is NaN
console.log("   123    "); // ----123-----
console.log((Number)("   123   "));// 123
console.log(Number(true))// output 1
console.log((Number)("123a"));// output NaN
console.log(Number(undefined)); // output NaN
console.log(Number(null)); // output 0

// comparison operator 
console.log(2>1); // output ==> true
console.log(2>=1) // output ==> true
console.log(2==1) // output ==> false
console.log(2!=1)// output ==> true
console.log("Z" > "A") // output ==> true
console.log("2">1)// output ==> true
console.log("01" == 1)// output ==> true
console.log("2"===1) // output ==> false
console.log("1"!=1)// output ==> false
console.log("1"!==1)//output ==> true
console.log(null == undefined)// output ==> true
console.log(null=== undefined) // output ==> false


// conditional statement
/*if (condition) {
    
} else {
    
}
let result = condition ? value1 : value2;
*/
// let accessAllowed;
// let age3 = prompt("How old are you",' ');
// if(age3>18){
//     accessAllowed=true;
// }else{
//     accessAllowed=false;
// }
// alert(accessAllowed);
// let age3 = prompt("How old are you",' ');
// let accessAllowed = age3>18?true:false;
// alert(accessAllowed);

// let age3 = prompt("age",'18');
// let messa = age3<3?"baby":age3<18?"student":age3<100?"adulat":"bempirous";
// alert(messa);

//logical operator
// || OR
// if(1||0){
//     console.log(true);
// }
// let hour = 9;
// if(hour<10 || hour>18){
//     console.log("the office is closed");
// }
// short Circuit
// true || console.log("not printed");

// && AND
// result = a && b
// console.log(true && false);
// let hour = 12;
// let min = 30;
// if(hour==12 && min==30){
//     console.log("this time is 12:30")
// }

// ! NOT 
//console.log(!true);