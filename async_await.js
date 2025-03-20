const pr = new Promise((resolve, reject) => {
  setInterval(() => {
    resolve("promise pr resolved");
  }, 5000);
});
// async function getData() {
//     return pr;
// }

// const data = getData();
// data.then((res)=>   console.log(res))

// console.log(data);

// await keyword only used inside async function

async function handlePromise() {
  console.log("hello world");

  const data = await pr; // js engine was waiting for promise to resolve
  console.log(
    "js will wait for promise to be resolved then this line will be printed."
  );
  console.log(data);
}
handlePromise();
