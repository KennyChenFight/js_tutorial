function max(num1, num2) {
    return num1 > num2 ? num1 : num2;
}
var maximum = max;
console.log(max(10, 20))
console.log(maximum(10, 20))

console.log('----------');

var max = function(num1, num2) {
    return num1 > num2 ? num1 : num2;
}
var maximum = max;
console.log(max(10, 20));
console.log(maximum(10, 20));

console.log('-----------');

var max = new Function('num1', 'num2',
    'return num1 > num2 ? num1 : num2'
);
var maximum = max;
console.log(max(10, 20));
console.log(maximum(10, 20));

console.log('------------');

var printIt = function(elem) {
    console.log(elem);
}
var array = [1, 2, 3];
array.forEach(printIt);
var naturalOrder = function(num1, num2) {
    return num1 - num2;
};
var array2 = [5, 1, 7, 3, 2];
array2.sort(naturalOrder).forEach(printIt);
var numbers = [5, 1, 7, 3, 2];
numbers.sort(function(num1, num2) {
    return num1 - num2;
}).forEach(function(elem) {
    console.log(elem);
});

console.log('------------');

(function() {
    console.log('匿名函式...')
})();

console.log('--------------');

var gcd = function g(num1, num2) {
    return num2 != 0 ? g(num2, num1 % num2) : num1;
}
console.log(gcd(10, 5));

console.log('-----------');

var gcd = function g(num1, num2) {
    return num2 != 0 ? g(num2, num1 % num2) : num1;
}
console.log(gcd.length);