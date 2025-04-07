// Prototypical inheritance in javascript
// Prototypal inheritance is a feature of JavaScript that allows objects to inherit properties and methods from other objects.
// This is done through the prototype chain, where an object can have a prototype that points to another object.
// inheritance in javascript
// intro to inheritance in javascript
// inheritance is a way to create a new object from an existing object
// the new object inherits properties and methods from the existing object
// this allows for code reuse and the creation of more complex objects based on simpler ones
// in javascript, inheritance is achieved through prototypes
// every object has a prototype, which is another object that it inherits properties and methods from
// when you create a new object, you can set its prototype to an existing object, allowing it to inherit from that object
// this is done using the Object.create() method or by setting the prototype property of a constructor function
// the prototype chain is the series of objects that are linked together through their prototypes
// when you access a property or method on an object, javascript looks for it in the object itself first
//Base class
//Super class
//Parent class

//Base class
function Animal(name) {
  this.name = name;
  this.eat = function () {
    console.log(`${this.name} is eating.`);
  };
}
//Sub class
//Child class
//Derived class
function Dog(name, breed) {
  Animal.call(this, name); // Call the parent constructor with the current context
  this.breed = breed;
  this.bark = function () {
    console.log(`${this.name} is barking.`);
    console.log(`${this.breed} is barking.`);
  };
}
const dog = new Dog("Buddy", "Golden Retriever");
dog.eat(); // Buddy is eating.
dog.bark(); // Buddy is barking.
