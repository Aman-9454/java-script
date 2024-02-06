"use strict";//treat all js code as newer version
// alert(3 + 3) //we are using nodejs, not browser
/*
number => range is the 2^53
string => ""
boolean => ture/false
null => standalone value
undefind => 
symbol => unique
oblect
*/
let age  = 18
// console.log( typeof age);
// console.log(typeof "age");
// console.log(typeof undefined);//the output is undefined b/c its type is undefind
// console.log(typeof null); // the output  is object b/c its type is object

let score = "54bcd"
// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score) // conversion 
// console.log(typeof valueInNumber);
// console.log(valueInNumber);
/* conversion result;;
"33"=> 33;
"33abc"=> NaN;
true=> 1; false=> 0;
*/
//conversion
let IsLoggedIn = "1"
let booleanIsLoggedIn = Boolean(IsLoggedIn)
// console.log(booleanIsLoggedIn);
// console.log(typeof  booleanIsLoggedIn );
/* conversion result;; 
1=> true; 0=> false;
""=> false;
"aman"=> true;
*/

let someNumber = 33
let stringNumber = Boolean(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);