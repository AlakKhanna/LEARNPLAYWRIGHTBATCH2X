var a = 10;
console.log(a); // Output: 10 //global scope

function printHello() {
    console.log("Hello, World!");
    var a = 20; // local scope
    console.log(a); // Output: 20

    if (true) {
        var a = 30; // still local scope, but re-declared
        console.log(a); // Output: 30
    }
}
printHello(); // Output: Hello, World!