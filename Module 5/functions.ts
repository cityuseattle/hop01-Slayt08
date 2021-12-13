//Named Fucntion
function add(a: number, b: number): number
{
    return a + b;
}

// Function Expression
const multiply = function(a: number, b: number): number
{
    return a * b;
}

// Arrow Function Expression
const substract = (a:number, b: number): number =>
{
    return a - b;
}

// Shorten Arrow Function Expression
const substract2 = (a:number, b: number): number => a - b;

// Call the functions
console.log(add(1, 2));
console.log(multiply(3, 4));
console.log(substract(5, 6));
console.log(substract2(7, 8));
