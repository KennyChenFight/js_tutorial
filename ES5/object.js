var obj = new Object();
console.log(obj)
var obj = {};
console.log(obj);

console.log('-----------');

var obj = {};
obj.x = 10;
console.log(obj.x);
delete obj.x;
console.log(obj.x);

console.log('-------------');

console.log(delete 1)

console.log('--------------');

var obj = {
    x: 10,
    y: 20
};
console.log(obj.x);
console.log(obj.y);

console.log('-----------');

var obj = {
    x: 10,
    y: 20
};
for(var prop in obj) {
    console.log(prop);
    console.log(typeof prop);
}
console.log('x' in obj);

console.log('------------');

var obj = {};
obj['x'] = 10;
console.log(obj.x);
console.log(obj['x'])

console.log('--------------');

var obj = {
    x: 10,
    y: 20
};
for (var prop in obj) {
    console.log(prop + ':', obj[prop])
}

console.log('--------------');

var obj = {
    'kenny.chen': 'handsome'
};
// not work
// console.log(obj.kenny.chen);
console.log(obj['kenny.chen']);
delete obj['kenny.chen'];
console.log(obj['kenny.chen']);
console.log('kenny.chen' in obj);

console.log('-----------');

var obj = {};
console.log(obj.x ? 'has x': 'has no x')

console.log('----------');

function doSome(option) {
    return {
        x: option.x || 1,
        y: option.y || 2,
        z: option.z || 3
    };
}
function log(obj) {
    for (var p in obj) {
        console.log(p + ':', obj[p]);
    }
}
var processed = doSome({
    x: 10,
    y: 20
})
log(processed)

console.log('------------');

var obj = {
    valueOf: function() {
        return 100;
    }
}
console.log(100 + obj);
console.log(obj + 200);
console.log(obj > 100);
console.log(obj >= 100);

console.log('-----------');

var kenny = {
    name: 'Kenny Chen',
    url: 'handsome.boy',
    toString: function() {
        return '[name: ' + this.name + ', url: ' + this.url + ']';
    }
};
console.log('My info: ' + kenny);

console.log('----------');

var man1 = {
    name: 'Kenny Chen',
    url: 'handsome.boy',
    equals: function(other) {
        return (this.name === other.name) && (this.url === other.url);
    }
}

var man2 = {
    name: 'Kenny Chen',
    url: 'handsome.boy',
    equals: function(other) {
        return (this.name === other.name) && (this.url === other.url);
    }
};
console.log(man1 === man2);
console.log(man1 == man2);
console.log(man1.equals(man2));

console.log('----------');

function equals(other) {
    return (this.name === other.name) && (this.url === other.url);
}
var man1 = {
    name: 'Kenny Chen',
    url: 'handsome.boy',
    equals: equals
};
var man2 = {
    name: 'Kenny Chen',
    url: 'handsome.boy',
    equals: equals
};
var man3 = {
    name: 'Kenny Chen',
    url: 'handsome.boy',
    equals: equals
};
console.log(man1.equals(man2));
console.log(man2.equals(man3))

console.log('--------------');

function Man(name, url) {
    this.name = name;
    this.url = url;
}

Man.prototype.equals = function(other) {
    return (this.name === other.name) && (this.url === other.url)
};
var man1 = new Man('Kenny Chen', 'handsome.boy');
var man2 = new Man('Kenny Chen', 'handsome.boy');
var man3 = new Man('Kenny Chen', 'handsome.boy');
console.log(man1.equals(man2));
console.log(man2.equals(man3));