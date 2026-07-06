let rajKumar = 25;
let age = rajKumar >= 18 ? 'Eligible for voting' : 'Not eligible for voting';
console.log(age);


let environment = 'production';
let baseUrl = environment === 'production'
    ? 'https://api.example.com'
    : 'http://localhost:3000';
console.log(baseUrl);

let isCI = true;
let buildType = isCI ?
    'Continuous Integration Build' :
    'Local Build';
console.log(buildType);

let responseTime = 120;
let sla = 1000;
let slaStatus = responseTime <= sla
    ? 'Within SLA'
    : 'SLA Breached';
console.log(slaStatus);


//nested ternary operator example

let age = 26;

let is_pramod_age = ager < 26
    ? "pramod will go to goa"
    : " else he will not go to goa";

console.log(is_pramod_age);


//multiple condtion

let age = 26;

let is_pramod_age = age < 26
    ? " yes he will go to goa"
    : " else he will not go to goa";

console.log(is_pramod_age);


let age_pramod = 45;
let is_pramod_goa = age_pramod < 18 ?
    (age_pramod > 26 ? "drink" : "Not drink")

    : "NO Goa";

let statuscode = 404;
let category =
    statusCode < 300 ? 'Success' :
        statusCode < 400 ? 'Redirection' :
            statusCode < 500 ? 'Client Error' :
                statusCode < 600 ? 'Server Error' :
                    'Unknown Status';

console.log(category);

let a = 10;
let b = 20;
let c = 30;

let result = a > b
    ? "a is greater"
    : a < b ? "b is greater" : "both are equal";
console.log(result);

let result = a > b
    ? (a < b ? "b is greater" : "both are equal")
    : "a is greater";

let result = a > b
    ? (a < b ? "b is greater" : "both are equal")
        ? (a < c ? "c is greater" : "both are equal")
        : "a is greater"
    : "b is greater";