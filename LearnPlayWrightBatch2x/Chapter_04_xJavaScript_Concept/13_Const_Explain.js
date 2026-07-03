const url = "https://www.google.com";
console.log(url); // Output: https://www.google.com
url = "https://www.bing.com"; // This will throw an error because url is a constant 


let name = "John";
name = "Doe"; // This is allowed because name is declared with let
console.log(name); // Output: Doe   

{
    let name = "Alice"; // This name is block-scoped to this block
    console.log(name); // Output: Alice
}