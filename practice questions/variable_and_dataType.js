// 1------------------------------------------------------- 
// current year, day date and time
const date = new Date();

// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getFullYear());
// console.log(date.getTime());

// 2 ------------------------------------------------------------
// string concate
const fName= "Ambika";
const lName = "Mishra";

// console.log(fName + " " + lName);

// 3 ----------------------------------------------------------------
// error
// console.error("Error is shown");


// 4 ------------------------------------------------------------------- 
// square of number
const square = (num) => {
 return num*num;
}
// console.log(square(15));


// 5 ---------------------------------------------------------------------
// type of variable
 const s= true;
//  console.log(typeof(s));
  
 
// 6 ----------------------------------------------------------------------- 
// console.log(100/0);  // infinity


// 7 -----------------------------------------------------------------------
// find area of circle - pie*radius*radius
const area = (r) =>{
    return Math.PI*r*r;
}
// console.log(area(2));


// 8 ------------------------------------------------------------------------- 
const x= null;
// console.log(typeof x); // object
const num="25";
// console.log(typeof num); //string
const a={};
// console.log(typeof a); // object
const b=undefined;
// console.log(typeof b);  // undefined
const c=true;
// console.log(typeof c); // boolean
const d=NaN;
// console.log(typeof a);  // object
let val;
console.log(typeof val); // undefined(in case of let and var), const will gove syntaxerror

const arr=[1,2,3];

arr=[4,5]
console.log(arr); //TypeError - reassignment to a 



