const arr = [1, 2, 3, 4, 5];
// map returns new array
// multiply by two
const double = arr.map((i) => {
  return i * 2;
});

// square root
// const square = arr.map((i)=>{
//       i=Math.sqrt(i);
//       return Math.round(i);
// })
const square = arr.map(Math.sqrt);

//binary
const binary = arr.map((i) => {
  return i.toString(2);
});

console.log(double);
console.log(square);
console.log(binary);
