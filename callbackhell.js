// console.log("hello");
// setTimeout(() =>{
//     console.log("Kittu");  
// },5000);

// console.log("world");

const cart = ["shoes","shirt","kurta","saree"];

// problem of callback
// callbackhell, structure is pyramid of doom
api.createOrder(cart,()=>{
    api.proceedToPayment(()=>{
        api.orderSummary(()=>{
            api.updateWallet(()=>{
                api.generateInvoice();
            });
        });
    });
});

// inversion of control - loosing control
// We are giving power to upper outer functions to call inner functions
// if bugs in createOrder api, our other callback functions will may 
// not called or may called many times.

const promise = createOrder(cart);

// in callback method we pass callback functions
// in promises we attach callback function to promise object
promise.then(() => {
    proceedToPayment(orderID);
})

