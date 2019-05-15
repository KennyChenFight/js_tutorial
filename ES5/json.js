var obj = {
    name: 'Kenny',
    age: 23,
    childs: [{name: 'Nicole', age: 3}]
};
var json = '{"name":"Kenny", "age":35, "childs":[{"name":"Nicole","age":3}]}';
var json2 = JSON.stringify(obj);
console.log(json2);
console.log(JSON.stringify(obj, ['name', 'age']));
console.log(JSON.stringify(obj, function(key, value) {
    if (key === 'age') {
        return undefined;
    }
    return value;
}));

function replacer(key, value) {  
    return key === 'age' ? undefined : value;
}
console.log(JSON.stringify(obj, replacer, 2));

var obj = {
    name: 'Kenny',
    age: 35,
    toJSON: function() {
        return {
            name: this.name.toUpperCase(),
            age: this.age
        };
    }
};
console.log(JSON.stringify(obj));

console.log('---------------');

var json = '{"name":"Justin","age":35,"childs":[{"name":"hamimi","age":3}]}';
var obj2 = JSON.parse(json);
console.log(obj2.name);
var obj2 = JSON.parse(json, function(key, value) {
    if (key === 'age') {
        return undefined;
    }
    return value;
})
console.log(obj2);