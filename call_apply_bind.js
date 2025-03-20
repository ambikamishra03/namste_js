// call
// const student1 = {
//     name:"ambika",
//     printName: function () {
//         console.log(this.name);

//     }
//  }
//  student1.printName();

//  const student2 = {
//     name:"tanu",
//  }

// instead of writing again printName in another object
// we can do function borrowing using call method
// student1.printName.call(student2);

const st1 = {
  name: "Ambika",
  age: 20,
};
const st2 = {
  name: "Tanu",
  age: 22,
};

let print = function (hometown, state) {
  console.log(
    this.name +
      " is " +
      this.age +
      " year old and her hometown is " +
      hometown +
      "," +
      state
  );
};

// print.call(st1,"deoria", "up");
// print.call(st2,"gorakhpur","up");

// apply method uses diffrent approach of passing arguments
// print.apply(st1,["deoria","uttar pradesh"])
// print.apply(st2,["gorakhpur","uttar pradesh"])

// bind method creates a copy of same method which can be invoked letter.
let printAboutMe = print.bind(st2, "gorakhpur", "up");
printAboutMe();
// console.log(printAboutMe());
