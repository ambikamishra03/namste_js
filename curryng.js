const multiply = function(x,y) {
    console.log(x*y);   
}
// const multiplyByTwo = function(y) {
//     let x=2;
//     console.log(x*y);   
// }
// multiplyByTwo(5)

// multiply(1,5);
// function currying 
const multiplyByTwo = multiply.bind(this,2);
// const multiplyByTwo = multiply.bind(this,2,3); // it will 5 as argument
const multiplyByThree = multiply.bind(this,3);

// multiplyByTwo(5);
// multiplyByThree(5);


// using closure
 let add = function (x){
    return function (y) {
       console.log(x+y);  
    }
 }
 add(2)(2);

let addby2 = add(2);
let addby10 = add(10);

addby2(5);
addby10(25)

