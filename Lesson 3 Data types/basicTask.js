// literal way
const counter0 = {
  count: 0,
  increment() {
    this.count++;
  },
  decrement() {
    this.count--;
  },
};
// using Object.create
const prototype = {};
const counter1 = Object.create(prototype, {
  count: { value: 0 },
  increment: {
    value: () => {
      this.count++;
    },
  },
  decrement: {
    value: () => {
      this.count--;
    },
  },
});
// using Object.assign
const counter2 = {};
Object.assign(counter2, counter0);
// using class constructor
class Counter {
  constructor() {
    this.count = 0;
  }
  increment() {
    this.count++;
  }
  decrement() {
    this.count--;
  }
}
const counter3 = new Counter();
// using function-constructor
const counterConstructor = () => {
  const counter = {
    count: 0,
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
  };
  return counter;
};
const counter4 = counterConstructor();
// using new Object
const counter5 = new Object();
counter5.count = 0;
counter5.increment = () => {
  counter5.count++;
};
counter5.decrement = () => {
  counter5.count--;
};
// using Object.fromEntries
const entries = [
  ["count", 0],
  [
    "increment",
    function () {
      this.count++;
    },
  ],
  [
    "decrement",
    function () {
      this.count--;
    },
  ],
];
const counter6 = Object.fromEntries(entries);
//
//
// all the ways to copy an object

// using ...spread operator
const copy0 = { ...counter0 };
// using Object.assign
const copy1 = {};
Object.assign(copy2, counter0); // technically it can be cloned cloning as well as creating a new one i guess
// parsing from json
const copy2 = JSON.parse(JSON.stringify(counter0));
// using structuredClone
const copy3 = structuredClone(counter0);
// creating my own function
const copy = (obj) => {
  const copy4 = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy4[key] = copy(obj[key]);
    }
  }
  return copy4;
};
//
//
// all the ways to declare a function

// function declaration
function makeCounter0() {
  const counter = {
    count: 0,
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
  };
  return counter;
}

// function expression
const makeCounter1 = function () {
  const counter = {
    count: 0,
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
  };
  return counter;
};

// arrow function
const makeCounter2 = () => {
  const counter = {
    count: 0,
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
  };
  return counter;
};

// also there are anonymous functions as well as IIFE, but i guess i can skip showcasing them because they are not specific ways to declare a function in case of IIFE and anonymous function obviously cannot be named makeCounter