"use strict"   
// if we use strict mode, this under function will undefined, 
// else window object beacause of this substitution ---
// if value of this keyword is undefined or null js will replace the
//  value of this keyword with global object in non strict mode.
console.log(this);
 // in global space it represent global object

function x() {
    console.log(this);  
    //undefined when function called without any ref,
    //  substitued by global object in non strict mode
    
}
// x();  // this = undefined in strict mode, global obj in non strict mode
// window.x(); // this = global object in strict mode also

const obj = {
    a: 10,
    name:"abc",
    // when a function is part of object then it is called method
    fun: function () {
        console.log(this);
        
    }
 }
//  this will ref to Object, this.a means obj.a 
 obj.fun();
 