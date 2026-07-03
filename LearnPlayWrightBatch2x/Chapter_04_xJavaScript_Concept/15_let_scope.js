let a = 10;
console.log(a); // global scrope


function test() {
    console.log(" hellow the tetsing acodemy");
    let a = 20; // local scope
    console.log(a); // Output: 20
    if (true) {
        let a = 30;
        console.log(a); // Output: 30
    }
    console.log(a); // Output: 30 // bec it is function scope
}
test();
console.log(a); // Output: 10