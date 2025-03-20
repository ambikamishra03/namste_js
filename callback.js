// // console.log("hello");
// setTimeout(() => {
//     console.log("js");
// }, 3000);

// // console.log("world");

// function x(y){
//     console.log("xx");
//     y();
// }

// x(function y(){
//     console.log("yy");
// })
// y is callback function
function attachEventListener(params) {
  let c = 0;
  document.getElementById("clickme").addEventListener("click", function xyz() {
    console.log("clicked", ++c);
  });
}

attachEventListener();
