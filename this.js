// "use strict"   
// if we use strict mode, this under function will undefined, 
// else window object
console.log(this);
 // in global space it represent global object

 const obj = {
    x: 10,
    name:"abc"
 }
function x() {
    console.log(this);
    
}
x();