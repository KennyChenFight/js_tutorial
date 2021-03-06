function max(a, b) {
    return a > b ? a : b;
}

function min(a, b) {
    return a < b ? a : b;
}

function sum(...numbers) {
    return numbers.reduce((acc, value) => acc + value);
}

const PI = 3.141592653589793;
const E = 2.718281828459045;

let foo = 'foo';
export {max, min, sum, PI, E};