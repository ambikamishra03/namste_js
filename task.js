const user = [
  { fname: "ambika", lname: "mishra", age: 24 },
  { fname: "manish", lname: "agrahari", age: 24 },
  { fname: "kittu", lname: "mishra", age: 18 },
  { fname: "donald", lname: "trump", age: 80 },
  { fname: "narendra", lname: "modi", age: 80 },
];

// fname and lname together

const names = user.map((name) => name.fname + " " + name.lname);
console.log(names);

// {24:2,18:1,80:1}

const ages = user.reduce((acc, cur) => {
  if (acc[cur.age]) {
    acc[cur.age] = ++acc[cur.age];
  } else {
    acc[cur.age] = 1;
  }
  return acc;
}, {});
console.log(ages);

// fname of people age < 30
const youngers =
  // user.filter((i) => i.age<30)
  // .map((i) => i.fname)

  user.reduce((acc, cur) => {
    if (cur.age < 30) {
      acc.push(cur.fname);
    }
    return acc;
  }, []);

console.log(youngers);
