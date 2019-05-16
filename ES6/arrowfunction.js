let arr = [1, 2, 5, 2, 5, 6, 9];
console.log(arr.filter(elem => elem % 2 == 0).map(elem => elem * 10));

console.log('-------------');

let plus = (a, b) => a + b;
console.log(plus(1, 2));

let minus = (a, b) => {
    return a - b;
}
console.log(minus(10, 5));