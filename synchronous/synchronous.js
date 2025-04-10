// Synchronous Programming in JavaScript
// JavaScript is a single-threaded language,
// meaning it has only one call stack and can
// execute one task at a time. By default, JavaScript executes code synchronously,
// unless asynchronous mechanisms (like callbacks, Promises, or async/await) are used.
myName();
function myName() {
  console.log("hi developer hosting");
}
console.log("hi developer")
setTimeout(() => {
  console.log("hi developer hi do you do");
}, 1500);
