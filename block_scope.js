var a = 100;
let q = 300;
// this q and q at line 5 are in diff scopes(both not in global object),
//  this q present in some script and below is in block, same in const
{
  var a = 10; // hoisted in global scope
  let q = 20; // hoisted in block scope
  const r = 30; // hoisted in block scope
  // console.log(a);
  // console.log(q);
  // console.log(r);
}
// console.log(a);
// as first a was shadowed by second a initialized in block
// so it will also print 10, as a is in global scope not block scope
// thats why both  var a=100; and  var a=10;
// points to same memory location but this is not applied with const and let
// console.log(q);
// console.log(r); // q and r are block scopped variable

//shadowing in function
// var x=20;
// let x=20;
// function z(){
// var x=200;
//     let x=300;
//     console.log(x);

// }
// z();
// console.log(x);

// illegal shadowing
// let s=20;
// {
//  let s=20;  valid
//  var s=200; illegal, same for const
// }
