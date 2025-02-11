a();
// x(); // it can not be hoisted

// function statement or declaration 
function a() {
    console.log("function statement");  
}

// function expression
var x=function b() {
    console.log("function expression");  
}
// b(); through error
x();

// anonymous function 
// function (){}  // this will give syntax error as anonymous function can used as expression only
// var f= function (){
//     console.log("anonymous function");
    
// }
// f();


// named function expression 
// var fun= function z(){
//     console.log("named function expression",z);
    
// }
// z(); // reference error, that z is not defined
// fun();

// first class function  -- function treated as value passed to another function or
//  returned from another function, it is called as first class citizen
var fun = function (params){
    // console.log(params);
    return function () {
        console.log("returned function");
        
    }
}
console.log(fun());

// fun(function(){
//     console.log("Hello");    
// })