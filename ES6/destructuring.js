let scores = [80, 90, 100];
let [score0, score1, score2] = scores;
console.log(score0);
console.log(score1);
console.log(score2);

console.log('----------');

let [a, b, c] = 'XYZ';
console.log(a);
console.log(b);
console.log(c);

console.log('----------');

let lt = [10, 9, 8, 7, 6];
let [head, ...tail] = lt;
console.log(head);
console.log(tail);

console.log('------------');

function sum(numbers) {  
    let [head, ...tail] = numbers;
    if (head) {
        return head + sum(tail);
    } else {
        return 0;
    }
}
console.log(sum([1, 2, 3, 4, 5]));

function sum2([head, ...tail]) {
    return head ? head + sum2(tail) : 0;
}
console.log(sum2([1, 2, 3, 4, 5]));

console.log('-------------');

let [g, h, j = 3] = [1, 2];
console.log(g);
console.log(h);
console.log(j);

console.log('-------------');

let [u, ,i, , o] = [1, 2, 3, 4, 5];
console.log(u);
console.log(i);
console.log(o);

console.log('--------------');

let [, ...behind] = [1, 2, 3, 4, 5];
console.log(behind);

console.log('------------');

let arr = [1, 2, 3];
let arr2 = [...arr, 4, 5];
console.log(arr2);

function plus(a, b) {
    return a + b;
}
console.log(plus(...[1, 2]));

console.log('-----------');

let k = {x: 10, y: 10};
let {x: q, y: w} = k;
console.log(q);
console.log(w);