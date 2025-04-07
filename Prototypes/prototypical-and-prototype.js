// prototype in JavaScript
// // Prototypes are a fundamental part of JavaScript and are used to create objects and inheritance.
// // Every object in JavaScript has a prototype, which is another object that it inherits properties and methods from.
// // This allows for code reuse and the creation of more complex objects based on simpler ones.

let user = {
  name: "John",
  age: 30,
  sayHi() {
    console.log(this.name);
  },
};
let guest = {
__proto__: user,
  isAdmin: false,
};
let admin = {
  name: "Admin",
};
admin.__proto__ = user; // set the prototype of admin to user
// admin.__proto__ = user; // set the prototype of admin to user
console.log(quest.name); // John
console.log(quest.age); // 30
log(quest.isAdmin); // false
quest.sayHi(); // John