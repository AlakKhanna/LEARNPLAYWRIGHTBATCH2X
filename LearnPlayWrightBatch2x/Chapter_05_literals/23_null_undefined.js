// Null vs Undefined

let emptyValue = null;
let notAssigned;

console.log(emptyValue);      // null
console.log(notAssigned);     // undefined

console.log(typeof emptyValue);  // object
console.log(typeof notAssigned); // undefined

// Example: variable declared but no value
let userName;
console.log(userName); // undefined

// Example: intentionally no value
let selectedUser = null;
console.log(selectedUser); // null

// Difference summary
// undefined = variable declared but value not assigned yet
// null = variable intentionally set to no value
