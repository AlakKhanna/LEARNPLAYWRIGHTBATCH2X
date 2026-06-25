// Examples of different identifier naming conventions in JavaScript

// camelCase: common JavaScript style for variables and functions
var firstName = "Smith";
var lastName = "Johnson";
var fullName = firstName + " " + lastName;

// snake_case: often used in other languages like Python, still valid in JS but less common
var first_name = "Smith";
var last_name = "Johnson";

// PascalCase: used for constructor functions and classes in JS
function PersonName() {
    this.FirstName = "Smith";
    this.LastName = "Johnson";
}

// UPPER_SNAKE_CASE: common convention for constant values
var MAX_COUNT = 100;

// kebab-case is invalid for JS identifiers because '-' is a subtraction operator
// Example usage: file names, CSS classes, and URL segments, not variable names

// Object keys: can use different naming styles, quoted keys allow spaces and special characters
var user = {
    camelCaseKey: "value1",
    "snake_case_key": "value2",
    "kebab-key": "value3",
    "PascalCaseKey": "value4"
};

// Logging examples show the different identifier styles in action
console.log("camelCase:", firstName, lastName, fullName);
console.log("snake_case:", first_name, last_name);
console.log("PascalCase object (instance):", new PersonName());
console.log("UPPER_SNAKE_CASE:", MAX_COUNT);
console.log("object keys:", user);
