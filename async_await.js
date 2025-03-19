

const pr = new Promise((resolve, reject) =>{
      resolve("promise pr resolved")
})
async function getData() {
    return pr;
}

const data = getData();
data.then((res)=>   console.log(res))

// console.log(data); 
