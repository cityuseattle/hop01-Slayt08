//Named Fucntion
function add(a, b) {
    return a + b;
}
// Function Expression
var multiply = function (a, b) {
    return a * b;
};
// Arrow Function Expression
var substract = function (a, b) {
    return a - b;
};
// Shorten Arrow Function Expression
var substract2 = function (a, b) { return a - b; };
// Call the functions
console.log(add(1, 2));
console.log(multiply(3, 4));
console.log(substract(5, 6));
console.log(substract2(7, 8));
