console.log(0 == " "); // true
console.log(0 === " "); // false

console.log(0 == "0"); // true
console.log(0 === "0"); // false

console.log(false == "false"); // false
console.log(false === "false"); // false

console.log(false == "0"); // true
console.log(false === "0"); // false

console.log(false == undefined); // false
console.log(false === undefined); // false

console.log(false == null); // false
console.log(false === null); // false

console.log(null == undefined); // true
console.log(null === undefined); // false   

console.log(0 == false); // true
console.log(null == 0); // false

console.log(null == undefined); // true
console.log(null === undefined); // false
