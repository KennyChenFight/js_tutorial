console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.isSafeInteger(9007199254740992));
console.log(Number.isSafeInteger(9007199254740991));
console.log(Number.isInteger(9007199254740992));
console.log(Number.EPSILON);

console.log('--------------');

console.log(0b0100);
console.log(0o77);

console.log('--------------');

console.log(Number('0b0100'));
console.log(Number('0o77'));
console.log((4).toString(2));
console.log((63).toString(8));
console.log(parseInt('100', 2));
console.log(parseInt('77', 8));

console.log('--------------');

console.log(Number.parseInt === parseInt);
console.log(Number.parseFloat === parseFloat);

console.log('-----------');

console.log(Number.isNaN(NaN));
console.log(Number.isNaN(1 / 'two'));
console.log(Number.isNaN('Kenny'));
console.log(Number.isNaN(undefined));
console.log(Number.isNaN('0'));

console.log('----------');

console.log(isFinite('15'));
console.log(Number.isFinite('15'));
console.log(Number.isFinite(15));
console.log(Number.isFinite(Number.Infinity));

console.log('-------------');

let html = `<!DOCTYPE html>
<html>
    <head>
        <title>Hello, World</title>
    </head>
    <body>
        Hello, World
    </body>
</html>`;
console.log(html);

let s = `Your left brain has nothing right.
... Your right brain has nothing left.`
console.log(s);
console.log(typeof s);

console.log(`1 + 2 = ${1 + 2}`);

let n = 1;
let m = 2;
console.log(`${n} + ${m} == ${n + m}`);

let o = {p: 10};
console.log(`${o.p}`);

let arr = [1, 2, 3];
console.log(`Double arr: ${arr.map(n => n * 2)}`);

let title = 'Hello World';
let message = 'Hello? World?';
let htmlBody = `<!DOCTYPE html>
... <html>
...     <head>
...         <title>${title}</title>
...     </head>
...     <body>
...         ${message}
...     </body>
... </html>`;
console.log(htmlBody);

console.log('------------');

console.log('ABC\nEFG');
console.log('ABC\\nEFG');
console.log(`ABC\nEFG`);
console.log(`ABC\\nEFG`);
console.log(String.raw`ABC\nEFG`);

console.log('-------------');

function f(strings) {
    console.log(strings);
    console.log(strings.raw);
}
f`ABC\nEFG`;