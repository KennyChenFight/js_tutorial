var some = 10;
some = 'Kenny';
console.log(some);

console.log('-----------');

var objects = ['Kenny', 100, new Date()];
var name = objects[0];
var score = objects[1];
var time = objects[2];
console.log(name);
console.log(score);
console.log(time);

console.log('---------');

function func() {  
    var y = 20;
}
// console.log(y);

console.log('---------');

var x = 10;
console.log(this.x);

console.log('-----------');

var x = 10;
function func() {  
    var x = 20;
    console.log(x);
}
func();
console.log(x);

console.log('----------');

var o = {};
console.log(o);
o.x = 10;
console.log(o.x);
delete o.x;
console.log(o.x)

console.log('---------');

var x = 10;
var x;
console.log(x);

console.log('-----------');

function func() {  
    if (true) {
        var x = 10;
    }
    return x;
}
console.log(func());

console.log('----------');

function func() {
    console.log(m);
    var m = 10;
    console.log(m);
}
func();

console.log('------------');

var m = 20;
function func() {
    console.log(m);
    var m = 10;
    console.log(m);
}
func();
