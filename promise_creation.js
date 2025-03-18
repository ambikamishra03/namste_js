const cart = ["shoes","shirt","kurta","saree"];




// produce  promise

const createOrder = (cart) => {
  const pr = new Promise((resolve,reject)=>{
    // validate cart
     if(!validateCart(cart)){
        const err = new Error("cart is not valid");
       reject(err);
     }
       // create order logic
        const orderId ="123";
        if(orderId){
            setTimeout(() =>{
                resolve(orderId);
            },5000)
        }
  });

  return pr;
}


const validateCart = (cart) =>{
return true;
}

// consumer part
const promise = createOrder(cart);
console.log(promise);

promise.then((orderId) =>{
    console.log(orderId);
    
    // return proceedToPay(paymentInfo);
})
// promise will fulfilled after 5 sec
// setTimeout(() =>{
//     console.log(promise);
    
// },5000)