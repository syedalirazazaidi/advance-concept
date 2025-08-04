///shallow copy vs deep copy
// shallow copy
// shallow copy is a bitwise copy of an object
// shallow copy creates a new object, but does not create a new reference for nested objects
// shallow copy only copies the reference of the nested object
// shallow copy is faster than deep copy
// shallow copy is used when you want to create a new object with the same properties as the original object
const object1 = {       
    name: "John",
    age: 30,
    address: {
        city: "New York",
        state: "NY"
    }
};
//deep copy
// deep copy creates a new object and also creates a new reference for nested objects
// deep copy creates a new object with the same properties as the original object
// deep copy is slower than shallow copy
let deepCopy = JSON.parse(JSON.stringify(object1)); // deep copy
object1.name = "Jane"; // change name in deepCopy   
console.log(object1)

console.log(deepCopy); // { name: "John", age: 30, address: { city: "New York", state: "NY" } }


// const object2 = { ...object1 }; // shallow copy
// object2.name = "Jane"; // change name in object2
// console.log(object1.name); // John
// console.log(object2.name); // Jane
// console.log(object1.address.city); // New York
// object1.address.city="karachi"; // change city in object1
// const object3 = { ...object1 };
// console.log(object2.address.city); // New York
// console.log(object3.address.city); // karachi

// object2.address.city = "Los Angeles"; // change city in object2