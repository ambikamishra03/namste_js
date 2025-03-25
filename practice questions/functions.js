// calculate area of circle with given radius

function area(r) {
    return Math.PI*r*r;
}
console.log(area(12));

// sum of array
const arr = [2,4,5,12,0,72,13,24,10];
const ans = arr.reduce((cur,acc)=>{
    acc = acc+cur;
    return acc;
},0)
console.log(ans);

// check if string start with specific character
 
const isChar = (str,a) =>{
  if(str[0]==a){
    return true;
  }
  return false;
}
console.log(isChar("ambika",'a'));
// console.log(isChar("ambika",'s'));

// reverse array
function reverse(arr) {
    for(let i=0;i<Math.floor(arr.length/2);i++){
        let temp =arr[i];
        arr[i] = arr[arr.length-i-1];
        arr[arr.length-i-1]=temp;
    }
    return arr;
}
console.log(arr);
console.log(reverse(arr));

// find largest in array
function largest(arr) {
    let res=arr[0];
    for(let i=1;i<arr.length;i++){
       res = Math.max(res,arr[i]);
    }
    return res;
}
console.log(largest(arr));

// hello world print it in kebab-case    ------  hello-world
function kebab(str) {
    return str.split(' ').join('-');
}
console.log(kebab("hello world"));





