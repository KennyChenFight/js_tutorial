console.log(+Infinity)
console.log(-Infinity)
console.log(Number.POSITIVE_INFINITY)
console.log(Number.NEGATIVE_INFINITY)
console.log(NaN)
console.log(Number.NaN)

console.log('------------')

console.log(NaN === NaN);
console.log(isNaN(NaN))
console.log(isNaN(1 / 'two'))
console.log(isNaN('Kenny'))
console.log(isNaN(undefined))
console.log(isNaN('0'))

console.log('------------')

// NaN 是 JavaScript 中唯一自身不等於自身的值
function isRealNaN(value) {
    return value !== value
}
console.log(isRealNaN(NaN));
console.log(isRealNaN('Kenny'));
console.log(isRealNaN(undefined));

console.log('---------------');
console.log(typeof NaN);

console.log('-------------')

function isRealFiniteNumber(value) {
    return typeof value === 'number' && isFinite(value);
}
console.log(isRealFiniteNumber(NaN));
console.log(isRealFiniteNumber(Infinity));
console.log(isRealFiniteNumber('93'));
console.log(isRealFiniteNumber(93));

console.log('--------------');

var str1 = 'text1';
var str2 = 'text2';
console.log(typeof 'A');
console.log(typeof 'B');

console.log('----------------');

console.log(typeof true);
console.log(typeof false);

console.log('-------------------');

console.log(typeof new Object());
console.log(typeof {});
console.log(typeof []);

console.log('----------------------');

var x = null;
console.log(x);
console.log(x === null);

console.log('-----------------------');

var x1 = {};
console.log(x1);
var x2 = [];
console.log(x2);
console.log(x1 instanceof Object);
console.log(x2 instanceof Object);
console.log(x1 instanceof Array);
console.log(x2 instanceof Array);

console.log('------------------------');

console.log(typeof null);
console.log(null instanceof Object);

console.log('-------------------------');

var x = null;
console.log(x);
var x;
console.log(x);
console.log(undefined === undefined);