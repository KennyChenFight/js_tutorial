if (true) {
    let y = 10;
}
// console.log(y);

console.log('------------');

// console.log(x);
let x = 10;

console.log('-------------');

let z = 10;
console.log(this.z);

console.log('--------------');

let a = 10;
{
    let a = 20;
    console.log(a);
}
console.log(a);

console.log('----------');

for(let i = 0; i < 10; i++) {
    console.log(i);
}
// console.log(i);

console.log('------------');

const y = 10;
const o = undefined;
console.log(y);
console.log(o);