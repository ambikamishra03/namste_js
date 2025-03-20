const github_api = "https://api.github.com/users/ambikamishra03";

const user = fetch(github_api);
console.log(user);

// result - data returned
// state - pending,rejected,fulfilled

// promise is an object that represents eventual completion 
// of asynchronous operation
user.then((data) =>{    
 console.log(data);
})