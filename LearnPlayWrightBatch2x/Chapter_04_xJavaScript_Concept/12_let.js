let a = 10;

let retryCount = 0;
retryCount = retryCount + 1;
retryCount = retryCount + 1;
console.log(retryCount); // Output: 1

let testStatus = "Passed";

if (testStatus === "pending") {
    let excutionTime = "10:00 AM"; // excutionTime is block-scoped to this if statement
    console.log("Test is pending, execution time is:", excutionTime);
}


// let= loyal
// var= vaibale/ traiotor