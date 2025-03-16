console.log("timers");

// settimeout
setTimeout(()=>{
   console.log("setTimeout at 3 sec");
},3000)

let x=0;
setInterval(()=>{
 x++;
 console.log(x);
},3000);

setInterval(()=>{
 console.log("hello "+x++);
},10000);

// clearInterval(1); // will clear first timer
clearInterval(2); //will clear second timer
// clearTimeout(1); // will clear first timer
// clearTimeout(2);  //will clear second timer
clearInterval(3); //will clear third timer
