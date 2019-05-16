let x = Symbol();
console.log(x);
let y = Symbol('The description of this symnol');
console.log(y);

console.log('------------');

console.log(Symbol('x') === Symbol('x'));
console.log(Symbol('for each method of xxx').toString());

console.log('-----------');

let s1 = Symbol.for('symbol 1 for testing');
let s = Symbol.for('symbol 1 for testing');
console.log(s1 === s);
let s2 = Symbol.for('symbol 2 for testing');
console.log(s1 === s2);

console.log('-----------');

let arr = [1, 2, 3];
let iterator = arr[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

console.log('---------');

let a = Symbol.for('s1 symbol');
console.log(Symbol.keyFor(s1));
console.log(Symbol.keyFor(Symbol.iterator));
