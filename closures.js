// closure a function bind together with its lexical env
// or function along with its lexical scope

// function x() {
//     var a=7;
//     function y() {
//         console.log(a);
//     }
//     y();
// }
// x();

// function x() {
//     var a=7;
//     return function y() {
//             console.log(a);
//         }
// }
// const a=x();
// a();  // print 7
// console.log(a); // print function y
// console.log(a());  // print function y

// const q=x(function y() {
//     console.log(a);
// });
//  q(); // print 7

function z() {
    var b = 200;
    function x() {
        var a = 7;
        function y() {
            console.log(a, b);
        }
        return y;
    }
    return x;
}
// const r1=z();
// const r2=r1();
// console.log(r2());

console.log(z()()()); // currying
// same as above, we can call x and y in z also

// closures uses:
// module design pattern
// currying
// functions like once
// memoize
// maintaining state in async world
// settimeouts
// iterators etc
