// mixins
// This file contains the mixins for the prototypes
// // Mixins are a way to add functionality to objects in JavaScript by combining multiple objects into one.
// // This allows for code reuse and the creation of more complex objects based on simpler ones.
// // Mixins are often used in JavaScript frameworks and libraries to provide additional functionality to objects without using inheritance.
// // In this example, we will create a mixin called CanFly that adds flying functionality to an object.
// // We will then create a Bird object and use the mixin to add flying functionality to it.
// // Mixins are a way to add functionality to objects in JavaScript by combining multiple objects into one.

function mixin(target, ...sources) {
  Object.assign(target, ...sources);
  return target;
}

// // Example usage:
const bird = {
  fly() {
    console.log(`${this.name} is flying.`);
  },
};
const eagle = {
  name: "Eagle",
};
mixin(eagle, bird); // mixin the bird object into the eagle object
eagle.fly(); // Eagle is flying.
bird.fly();

const obj3 = {
  pro() {
    console.log(`Reactjs is ${this.language} frameworks`);
  },
};
const obj2 = {
  language: "javscript",
};
mixin(obj3, obj2);
