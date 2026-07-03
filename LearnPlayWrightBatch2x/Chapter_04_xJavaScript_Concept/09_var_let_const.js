var v = 10;
console.log(v); // Output: 10
let l = 20;
console.log(l); // Output: 20
const c = 30;
console.log(c); // Output: 30


var browser = "Chrome";
var browser = "Firefox"; // Re-declaring with var is allowed
browser = "Safari"; // Re-assigning is allowed

var testcase = ["test1", "test2", "test3"];

for (var i = 0; i < testcase.length; i++) {
    console.log(testcase[i]); // Output: test1, test2, test3
}
console.log(i); // Output: 3 (i is accessible outside the loop due to var scoping)  


console.log("--------------------------------------------------");

console.log("Hi, I am learning JavaScript");

console.log("Hi, I am learning JavaScript");

console.log("Hi, I am learning JavaScript");

console.log("Hi, I am learning JavaScript");

function greet() {
    console.log("Hi, I am learning JavaScript");
}
greet(); // Output: Hi, I am learning JavaScript