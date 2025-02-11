const arr= [1,2,3,4,5];

// function sum (arr){
//     let s=0;
//    for(let i=0;i<arr.length;i++){
//      s=s+arr[i];
//    }
//    return s;
   
// }

// console.log(sum(arr));

const sum = arr.reduce((acc,cur)=>{
    acc=acc+cur;
    return acc;
},0)
console.log(sum);

const max = arr.reduce((acc,cur) =>{
    acc=Math.max(acc,cur);
    return acc;
},0);
console.log(max);


