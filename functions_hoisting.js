
// console.log(x); 
// var x=5;
// function print(){
//     var x=10;
//     console.log(x); 
// }

// console.log(window.x);
// console.log(x); 
// console.log(this.x); 
// console.log(window); 




// --------------------scope-------------------

function fun1() {
    var b=10;
    fun2(); 
    function fun2() {
        console.log(b);   
    } 
 
}
//  console.log(b);
fun1();

var x=100;
// console.log(a); referenceerror

let a=30; // can not be redeclared, syntaxerror(but in var it ispossible)
// anything above line 33 is temporal dead zone for a,it is the time between a is assingned undefined in
//  some memory to a has been initialized with some value(var is assigned is undefined in memory phase in global object but const is not they are in some other memory)

// const t; can not be uninitialized(syntaxerror)
// console.log(s); (reference error)
const s=123;  

// s=6;  (TypeError) redeclared
console.log(s);
// declare and initialize every variable at top to shrink temporal dead zone


