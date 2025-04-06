// data type permittive an non-permittive
// Primitive data types are immutable (cannot be changed) and are passed by value
// Non-primitive data types are mutable (can be changed) and are passed by reference
// Primitive data types include: string, number, boolean, null, undefined, and symbol
// Non-primitive data types include: object, array, function, and date
// Primitive data types are stored in the stack memory and non-primitive data types are stored in the heap memory
// Primitive data types are compared by value and non-primitive data types are compared by reference
// Primitive data types are faster than non-primitive data types
// Primitive data types are passed by value and non-primitive data types are passed by reference
// Primitive data types are immutable and non-primitive data types are mutable
// Primitive data types are simple data types and non-primitive data types are complex data types
// Primitive data types are single values and non-primitive data types are collections of values
// Primitive data types are not objects and non-primitive data types are objects

// Primitive data types are not extensible and non-primitive data types are extensible
// Primitive data types are not enumerable and non-primitive data types are enumerable
// Primitive data types are not iterable and non-primitive data types are iterable

var a = 20; // a is a number
var b = a; // a is copied to b
b = 10;
console.log(a); // 20
console.log(b); // 10
// a is not changed because it is a primitive data type and is passed by value
// b is a new variable and is not related to a
// a and b are two different variables

var obj = { a: 20 }; // obj is an object
obj1 = obj; // obj is copied to obj1
obj1.a = 10;
console.log(obj); // 10
console.log(obj1); // 10
