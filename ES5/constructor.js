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
var p3 = {
    name: 'Jack',
    age:40,
    toString: toString
};
console.log(p1.toString());
console.log(p2.toString());
console.log(p3.toString());

console.log('--------------');

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.toString = toString;
}
var p1 = new Person('Kenny', 23);
var p2 = new Person('Nicole', 30);
var p3 = new Person('Jack', 40);
console.log(p1.toString());
console.log(p2.toString());
console.log(p3.toString());

console.log('-------------');

var p = {};
Person.call(p, 'Kenny', 23);
console.log(p.toString());

console.log('--------------');

function person(name, age) {
    return {
        name: name,
        age: age,
        toString: toString
    };
}
var p = person('Kenny', 23);
console.log(p.toString());

console.log('---------------');

function Nobody() {

}

function Person(name, age) {
    return [];
}
var n = new Nobody();
var p = new Person();
console.log(n instanceof Nobody);
console.log(p instanceof Person);
console.log(p instanceof Array);

console.log('-------------');

function Person() {}
var p = new Person();
console.log(p.constructor === Person);
console.log(Person.prototype.constructor === Person);

console.log('-----------');

function Person(name, age) {
    this.name = name;
    this.age = age;
}
var p = new Person('Kenny', 23);
console.log(p.name);
console.log(p.age);

console.log('----------------');

function Person(name, age) {
    this.getName = function() {
        return name;
    };
    this.age = age;
}
var p = new Person('Kenny', 23);
console.log(p.name);
console.log(p.getName());
console.log(p.age);

console.log('--------------');

function Account() {  
    var balance = 0;
    this.getBalance = function() {
        return balance;
    };
    this.setBalance = function(money) {
        if (money < 0) {
            throw new Error('can\'t set negative balance');
        }
        balance = money;
    };
}
var acct = new Account();
console.log(acct.getBalance());
acct.setBalance(1000);
console.log(acct.getBalance());
// acct.setBalance(-1000);