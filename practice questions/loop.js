// sum of 10 numbers
let a=1;
let sum=0;
while(a<=10){
    sum +=a;
    a++;
}
// console.log(sum);

// print odd numbers

for (let i = 1; i <= 20 ;i++) {
   if(i%2==1){
    //  console.log(i);
   }
} 

// factorial
function fact(n) {
  let result=1;
  for(let i=1;i<=n;i++)
  {
    result=i*result;
  }
  return result;
}
// console.log(fact(5));

// print grid of size n*n
// 1 2 3 
// 4 5 6
// 7 8 9
let num=1;

function grid(n){
  for(let i=0;i<n;i++){
    let str="";
      for(let j=0;j<n;j++){
        str +=`${num} `
         num++;
      }
      console.log(str);
  }  
}
// grid(3);

// reverse array using for loop
let arr = [1,2,3,4,5,6];
for(let i=0;i<Math.floor(arr.length/2);i++){
  var temp=arr[i];
  arr[i]=arr[arr.length-i-1];
  arr[arr.length-i-1]=temp;
}
// console.log(arr);

// while loop to log numbers from 1 to 100 div by 5 
let i=1;
while(i<100){
  if(i%5==0) {
  // console.log(i);
  }
i++;
}


















