// what is closure
// a function with its lexical scope, function have reference to all variables resides in its lexical scope
let c=200;
function closure(num){
    var b=20;
    var c=30;
function x(){
    function y(){
        console.log(a,b,c,num);
    }
    var a=10;
    y();
}
return x;
}

// closure()();
var fun = closure(70);
fun();

// used in module patern, higher-order function
// function currying,data hiding and encapsulation

// constructor function
function Count() {
    var counter = 10;
  this.incermentC = function (){
        counter++;
        console.log(counter);  
    } 
    this.decrementC = function (){
        counter--;
        console.log(counter);  
    } 
}

var c1= new Count();
c1.incermentC();

var c2=new Count(); // new counter
c2.decrementC();


// closure does not support garbage collection 
// but v8 engine supports smart garbage collection.