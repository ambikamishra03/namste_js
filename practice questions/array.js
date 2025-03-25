// // use for...in loop to print key and value of object
// let obj={
// name:'Ambika Mishra',
// age:'24',
// }
// for(const key in obj){
//   // console.log(key); 
// }

// // for...of loop se string print kro
// let str="javascript";
// for (const i of str) {
// //    console.log(i); 
// }
//  // foreach
// let numArr = [10,20,30,40,50];
// // numArr.forEach(element => console.log(element));

// //add new element to numArr
// numArr.push(60);
// numArr.push(70);
// // remove elemet from array
// numArr.pop();

// //add element to start of array
// numArr.unshift(10);
// console.log(numArr); // 10, 10, 20, 30, 40, 50, 60

// const arr1=numArr.slice(0,3) //10 10 20
// const arr2=numArr.splice(0,3) //10 10 20

// // const arr1=numArr.slice(3) //30, 40, 50, 60
// // const arr2=numArr.splice(3)  //30, 40, 50, 60
// console.log(arr1,arr2);






// // difference between slice() and splice()
// // slice(): The slice() method is used to extract a portion of 
// // an array and returns a new array containing the extracted elements.
// // splice(): The splice() method is used to change the contents of 
// // an array by removing or replacing existing
// // elements and/or adding new elements in place


// let array1= [1,2,3,4,5,6];

// let newArray1 = array1.slice(1,3) // start and end
// console.log(newArray1);


// // can not modify original array
// // array1.slice(2,4); 
// // console.log(array1);
// array1.splice(0,3); // start and how many number to delete
// console.log(array1); // 4 5 6 will be printed

// console.log(arr1.includes(5)); 


// combine 2 array using concat
let arr1= [1,2,3];
let arr2= [4,5,6];
// console.log(arr1.concat(arr2));

// sort array 
const a=[4,2,3,15,52,76,0,47,11,16,14];
const sort = (arr) =>{
    let flag=false;
    for(let i=0;i<arr.length-1;i++){
        for(let j=0;j<arr.length-i-1;j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
                flag=true;
            }
        }
        if(flag==false) break;
    }
    return arr;
    
}
console.log(sort(a));


// create copy of array without changing original array

let copyArray = a;
console.log(copyArray);
