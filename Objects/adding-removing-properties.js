// add
const obj = { a: 1, b: 2 };
obj.c = 3; // add property c with value 3
console.log(obj); // { a: 1, b: 2, c: 3 }
const obj2 = obj;
obj2.d = 4; // add property d with value 4
console.log(obj2); // { a: 1, b: 2, c: 3, d: 4 }
console.log(obj); // { a: 1, b: 2, c: 3, d: 4 }
