console.log(Array.of(1));
console.log(Array.of(1, 2));
console.log(Array.of(1, 2, 3));
console.log(Array.of(1, 2, 3, undefined, 4));

console.log('---------------');

let o = {
    '0': 100, 
    '1': 200,
    '2': 300,
    length: 3
};
let arr = Array.from(o);
arr.forEach(elem => console.log(elem));
console.log(arr instanceof Array);

console.log('------------');

console.log(Array.from([1,,2]));
console.log(Array.from({length: 4}));

console.log('----------');

console.log(Array.from([1,,3], elem => elem ? elem * 2 : 0));
console.log(Array(10).fill(0));
console.log([1, 2, 3, 4, 5].fill(0, 2, 4));

console.log('------------');

console.log([10, 20 , -30, 40].find(n => n < 0));
console.log([10, 20 , -30, 40].findIndex(n => n < 0));
