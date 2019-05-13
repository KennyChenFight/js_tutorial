function toString() {
    return '[' + this.name + ',' + this.age + ']';
}

var p1 = {
    name: 'Kenny',
    age: 23,
    toString: toString
};
var p2 = {
    name: 'Nicole',
    age: 30,
    toString: toString
};
console.log(p1.toString());
console.log(p2.toString());

console.log('-----------');

function toString() {
    return '[' + this.name + ',' + this.age + ']';
}
var p1 = {
    name: 'Kenny',
    age: 23
};
var p2 = {
    name: 'Nicole',
    age: 32
}
console.log(toString.call(p1));
console.log(toString.call(p2));

console.log('------------');

function add(num1, num2) {
    return this.num + num1 + num2;
}
var o = {num: 10};
console.log(add.call(o, 20, 30));

console.log('-----------');

function add(num1, num2) {
    return this.num + num1 + num2;
}
var o1 = {num: 10};
var o2 = {num: 100};
var args = [20, 30];
console.log(add.apply(o1, args));
console.log(add.apply(o2, args));

console.log('-----------');

function toString() {
    return this.name;
}
var p1 = {
    name: 'Kenny',
    toString: toString
};
var p2 = {
    name: 'Nicole',
    toString: toString
};
console.log(p1.toString());
console.log(p2.toString());
console.log(p1.toString.call(p2));

console.log('--------');

var o = {
    name: 'Kenny',
    toString: function() {
        return this.name;
    }
};
console.log(o.toString());

console.log('-----------');

var obj = {
    '0': 100,
    '1': 200,
    '2': 300,
    length: 3,
    forEach: function(callback) {
        for (var i = 0; i < this.length; i++) {
            callback(this[i]);
        }
    }
}
obj.forEach(function(elem) {
    console.log(elem);
})

console.log('-------------');

function forEach(callback) {
    for (var i = 0; i < this.length; i++) {
        callback(this[i]);
    }
}
var obj1 = {
    '0': 100,
    '1': 200,
    '2': 300,
    length: 3
};
var f1 = forEach.bind(obj1);
f1(function(elem) {
    console.log(elem);
})
var obj2 = {
    '0': 10,
    '1': 20,
    '2': 30,
    length: 3,
    forEach: f1
};
obj2.forEach(function(elem) {
    console.log(elem);
})

console.log('------------');

function plus(a, b) {
    return a + b;
}

var addTwo = plus.bind(undefined, 2);
console.log(addTwo(10));
console.log(addTwo(5));