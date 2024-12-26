// As far as i'm acknowledged there are the following sorting comparison-based algorithms:

// Bubble sort - that algorithm compares 2 elements and swaps them if they are in the wrong order
// it has O(n*n) worst-case time complexity and O(n) best case complexity

// Selection sort - scans all the array for an element less than our current index then swaps them
// has O(n*n) time complexity

// Insertion sort - picks an element and finds its place among the sorted ones
// has O(n*n) worst-case time complexity and O(n) best case complexity

// Merge sort - recursively splits an array then merges it backwards while sorting in the process
// has O(n*log(n))time complexity and O(n) space complexity which means that it requires additional memory usage

// Quick sort - recursively creates a pivot to which all other elements in the array a compared
// this algorithm can have O(n*log(n)) time complexity if the pivot is chosen right, or O(n*n) in the worst case
// it also has O(n) space complexity due to recursive creation of arrays

// Heap sort - creates a heap from input array, then recursively finds the biggest element in it and adds it to the result
// has O(n*log(n))time complexity

// Shell sort - creates pairs of array's elements with a gap between them, compares, then recursively halving the gap
// shell sort is considered as an optimization of isertion sort,
// having insertion sort's performance in it's worst-case scenario while allowing for a O(n*(log2n) time complexity

// Comb sort - enhancement of the bubble sort which may be faster than it;s original by usage of a gap
// time complexity - O((n*n)/2*p) where p is the shrink factor, allows for the best performace of O(n*log(n))

// Cocktail sort - enhancement of the bubble sort by sorting in two directions
// while still haven O(n*n) average performanceit allows for O(n) in it's best case scenario

// Tree sort - creates a binary search tree from the array, then traverses the tree creating the result array
// Allows for O(n log(n)) time complexity while have O(n*n) as an average. Has O(n) sapce complexity

// Tim sort - combines merge sort and insertion sort, creates subdivisions of the initial array,
// insertion sorts them and merges back.
// has O(n log(n)) time complexity, has O(n) space complexity

// Second task
const person0 = {
  name: "Vladimir",
  surname: "Kinyapin",
  age: 22,
  say: () => {
    console.log("42 is the answer to everything, i swear");
  },
};

const personCreator = () => {
  person = {
    name: "Scooby",
    surname: "Doo",
    age: 8,
    say: () => {
      console.log("You know, i'm not even a person");
    },
  };
  return person;
};
const person1 = personCreator();

class SuperPerson {
  constructor(name) {
    this.name = name;
    this.setName = (newName) => {
      this.name = newName;
    };
    this.getName = () => {
      return this.name;
    };
  }
}

class Person extends SuperPerson {
  constructor(name, surname, age) {
    super(name);
    this.surname = surname;
    this.age = age;
    this.say = () => {
      console.log("...?!");
    };
  }
}
const person2 = new Person("Gordon", "Freeman", 45); // person as an instance of Person which inherits from SuperPerson
// created person objects using three different methods

const anotherPerson0 = Object.assign({}, person0);
const anotherPerson1 = { ...person1 };
const anotherPerson2 = JSON.parse(JSON.stringify(person2));
console.log(anotherPerson2);
// all of them have an access to the .say method of their parents

Object.prototype.logInfo = function () {
  console.log(this.name);
  console.log(this.surname);
  console.log(this.age);
};
// now all of objects have an access to the .logInfo method
