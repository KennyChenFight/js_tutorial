function some(a, b, ...others) {  
    console.log(a);
    console.log(b);
    console.log(others);
}
some(10);
some(10, 20);
some(10, 20, 30);
some(10, 20, 30, 40);
some(...[1, 2, 3, 4]);

console.log('--------------');

function f() {}
console.log(f.name);
console.log((function() {

}).name);
let f2 = function() {};
console.log(f2.name);
let f3 = f2;
console.log(f3.name);

console.log('---------');

function doSome(a, b, c = 10) {
    console.log(a, b, c);
}
doSome(1, 2);
doSome(1, 2, 3);

console.log('--------------');

function f(a, b = []) {
    b.push(a);
    console.log(a, b);
}
f(1);
f(1, [1, 2, 3]);