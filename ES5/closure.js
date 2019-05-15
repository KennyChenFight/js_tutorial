function doSome() {
    var x = 10;
    function f(y) {
        return x + y;
    }
    return f;
}
var foo = doSome();
console.log(foo(20));
console.log(foo(30));

console.log('-------------');

function doSome2() {
    var x = 10;
    function f(y) {
        x = x + y;
        return x;
    }
    return f;
}
var foo = doSome2();
console.log(foo(20));
console.log(foo(30));

console.log('-----------');

var sum = 0;
[1, 2, 3, 4, 5].forEach(function(elem) {
    sum += elem;
})
console.log(sum);