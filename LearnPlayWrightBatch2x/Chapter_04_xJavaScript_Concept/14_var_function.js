var a = 10;
console.log(a); // Output: 10


function test() {
    console.log(a); // Output: 10
    var a = 20;
    console.log(a); // Output: 20
    if (true) {
        var a = 30;
        console.log(a); // Output: 30
    }
    console.log(a); // Output: 30 // bec it is function scope
}
test();
console.log(a); // Output: 10