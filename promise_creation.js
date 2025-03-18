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

const proceedToPay = (orderId) =>{
  // handle payment
  return new Promise((resolve, reject)=>{
     resolve("Payment successful");
  })
}

// consumer part
createOrder(cart)
.then((orderId) =>{
    console.log(orderId); 
    return orderId; 
}).then((orderId)=>{
   return proceedToPay(orderId);
}).then((paymentInfo) =>{
   console.log(paymentInfo);
   return paymentInfo;
}).catch((err)=>{
  console.log(err.message); 
}).finally(() =>{
    console.log("I will be always called");
    
})













// promise will fulfilled after 5 sec
// setTimeout(() =>{
//     console.log(promise);
    
// },5000)