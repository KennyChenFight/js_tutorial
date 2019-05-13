var array1 = new Array();
console.log(array1.length);
var array2 = new Array(10);
console.log(array2.length);
var array3 = new Array(10, 20, 30);
console.log(array3.length);

console.log('----------');

var array1 = [];
console.log(array1.length);
var array2 = [];
array2.length = 10;
console.log(array2.length);
var array3 = [10, 20, 30];
console.log(array3.length);

console.log('------------');

function print(array) {
    for (var i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}
var array = [1, 2, 3];
print(array);
array.length = 5;
print(array);
array.length = 2;
print(array);
array.length = 3;
print(array);

console.log('------------');

var array = [1, 2, 3];
console.log(array['0']);
console.log(array['1']);
console.log(array['2']);
for (var i in array) {
    console.log(i + ": ", array[i]);
}
delete array[1];
console.log(array);

console.log('-------------');

function print(array) {
    for (var i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}
print({
    '0': 100,
    '1': 200,
    '2': 300,
    length: 3
})

console.log('-----------');

var array = [];
console.log(array.length);
array[0] = 100;
console.log(array.length);
array[10] = 900;
console.log(array.length);

console.log('------------');

var names = ['Justin', 'Monica', 'Irene'];
names.sort(function(n1, n2) {
    return n1.length - n2.length;
}).forEach(function(elem) {
    console.log(elem);
})

console.log('------------');

var obj = {
    '0': 100,
    '1': 200,
    '2': 300,
    length: 3
};
obj.forEach = Array.prototype.forEach;
obj.forEach(function(elem, index, arr) {
    console.log(elem);
})
obj.forEach(console.log);

console.log('-----------');

function isLength5(value, index, array) {
    return value.length === 5;
}
function lengthLessThan6(value, index, array) {
    return value.length < 6;
}
var names = ['Justin', 'Monica', 'Irene'];
console.log(names.every(isLength5));
console.log(names.some(lengthLessThan6));
var sum = names.filter(function(elem) {
    return elem.length > 5;
}).map(function(elem) {
    return elem.length;
}).reduce(function(accum, elem) {
    return accum + elem;
}, 0);
console.log(sum);