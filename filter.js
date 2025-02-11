const arr = [1,2,3,4,5,6,7,8,9,10,11,12];

const even = arr.filter((i)=>{
    return i%2===0;
})
const odd = arr.filter((i)=>{
    return i%2!==0;
})

const num = arr.filter((i)=>{
    return i>4;
})

console.log(even);
console.log(odd);
console.log(num);


