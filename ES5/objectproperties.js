var obj1 = {};
console.log(Object.isExtensible(obj1));
obj1.name = 'kenny';

var obj2 = Object.preventExtensions(obj1);
console.log(obj1 === obj2);
console.log(Object.isExtensible(obj2));
obj2.age = 39;
console.log(obj2.age);

console.log('-------------');

var obj = {name: 'kenny'};
Object.preventExtensions(obj);
obj.name = 'Kenny';
console.log(obj.name);

delete obj.name;
console.log(obj.name);

Object.prototype.name = 'kenny';
console.log(obj.name);

console.log('-----------');

var obj = {name: 'kenny'};
console.log(JSON.stringify(
    Object.getOwnPropertyDescriptor(obj, 'name')
));

console.log('----------');

var obj = {};
Object.defineProperty(obj, 'name', {
    value: 'kenny',
    writable: false,
    enumerable: false,
    configurable: false
});
console.log(JSON.stringify(
    Object.getOwnPropertyDescriptor(obj, 'name')
));

console.log('----------');

var obj = {};

Object.defineProperty(obj, 'name', {
    value: 'kenny'
});
console.log(JSON.stringify(
    Object.getOwnPropertyDescriptor(obj, 'name')
));

console.log('------------');

var obj = {name: 'kenny'};
Object.defineProperty(obj, 'name', {
    enumerable: false
})
console.log(JSON.stringify(
    Object.getOwnPropertyDescriptor(obj, 'name')
));

console.log('----------');

var obj = {};
Object.defineProperties(obj, {
    'name': {
        value: 'Nicole',
        enumerable: true
    },
    'age': {
        value: 30,
        writable: true,
        enumerable: true
    }
});

