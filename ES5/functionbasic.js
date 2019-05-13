'use strict'
function max(num1, num2) {
    return num1 > num2 ? num1 : num2;
}
console.log(max(10, 20));

console.log('-----------');

function func(a, b) {
    console.log(a);
    console.log(b);
}
func(10, 20);
func(10);
func();
func(10, 20, 30, 40);

console.log('-----------');

function sum() {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}
console.log(sum(1, 2));
console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4));

console.log('------------');

function func(a, b) {
    console.log(a + ': ' + arguments[0]);
    console.log(b + ': ' + arguments[1]);
    a = 0;
    b = 0;
    console.log(a + ': ' + arguments[0]);
    console.log(b + ': ' + arguments[1]);
    arguments[0] = 100;
    arguments[1] = 200;
    console.log(a + ': ' + arguments[0]);
    console.log(b + ': ' + arguments[1]);
}
func(10, 20);

console.log('------------');

function plus(a, b) {
    if (arguments.length != 2) {
        throw new Error('必須有兩個引數');
    }
    return a + b;
}
console.log(plus(10, 20));
// console.log(plus(10));

console.log('--------------');

function rangeClosed(startInclusive, endInclusive, step) {
    var s = step || 1;
    var numbers = [startInclusive];
    for (var i = 0; numbers[i] < endInclusive; i++) {
        numbers.push(numbers[i] + s);
    }
    return numbers;
}
rangeClosed(1, 5, 2).forEach(function(elem) {
    console.log(elem);
})
rangeClosed(1, 5).forEach(function(elem) {
    console.log(elem);
})

console.log('----------');

function options(option) {
    var opt = {
        x: option.x || 10,
        y: option.y || 20,
        z: option.z || 30
    };
    console.log(opt.x);
    console.log(opt.y);
    console.log(opt.z);
}
options({x: 100});
options({
    x: 100,
    y: 200,
})
options({
    x: 100,
    y: 200,
    z: 300
})