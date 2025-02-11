const arr=[3,2,4,8];

const area = (radius)=> {
 return Math.floor(Math.PI*radius*radius);
}

const circumference =(radius) =>{
    return Math.floor(2*Math.PI*radius);
}
const diameter =(radius) =>{
    return 2*radius;
}
const fun = (logic,arr) =>{
    for (let i = 0; i < arr.length; i++){
         console.log(logic(arr[i]));
    }
}
console.log("Area");
fun(area,arr);
console.log("Circumference");
fun(circumference,arr);
console.log("Diameter");
fun(diameter,arr);
