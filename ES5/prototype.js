function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.toString = function() {
    return '[' + this.name + ',' + this.age + ']';
};
var p1 = new Person('Kenny', 23);
var p2 = new Person('Nicole', 30);
console.log(p1.toString());
console.log(p2.toString());
console.log(Person.prototype === Object.getPrototypeOf(p1));
console.log(Person.prototype === Object.getPrototypeOf(p2));

console.log('------------');

function Some() {}
Some.prototype.data = 10;
var s = new Some();
console.log(s.data);
s.data = 20;
console.log(s.data);
console.log(Some.prototype.data);

console.log('--------------');

function Some2() {}
var s = new Some2();
console.log(s.data);
Some2.prototype.data = 10;
console.log(s.data);

console.log('--------------');

Object.prototype.xyz = 10;
function Some3() {}
var s = new Some3();
console.log(s.xyz);
console.log(Object.getPrototypeOf(s) === Some3.prototype);

var protoOfS = Object.getPrototypeOf(s);
console.log(Object.getPrototypeOf(protoOfS) === Object.prototype);

console.log('-------------');

console.log(Array.prototype.isPrototypeOf([]));
console.log(Function.prototype.isPrototypeOf(Array));
console.log(Object.prototype.isPrototypeOf(Array.prototype));

console.log('------------');

var arrayLike = {
    '0': 10,
    '1': 20,
    '2': 30,
    length: 3
};
arrayLike.__proto__ = [];
arrayLike.map(function (elem) {  
    return elem * 10
}).forEach(function(elem) {
    console.log(elem);
})
