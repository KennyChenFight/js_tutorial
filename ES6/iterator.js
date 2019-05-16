let name = 'Kenny';
for (let ch of name) {
    console.log(ch);
}
for (let v of [10, 20, 30]) {
    console.log(v);
}

console.log('-----------');

let arr = [10, 20, 30];
let it = arr[Symbol.iterator]();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

console.log('-----------');

function range(start, end) {
    let i = start;
    return {
        [Symbol.iterator]() {
            return this;
        },
        next() {
            return i < end ?
                {value: i++, done: false} :
                {value: undefined, done: true}
        }
    };
}
for (let n of range(3, 8)) {
    console.log(n);
}

console.log('-----------');

function range2(start, end) {
    let i = start;
    return {
        [Symbol.iterator]() {
            return this;
        },
        next() {
            return i < end ?
                {value: i++, done: false} :
                {done: true}
        },
        return() {
            console.log('return');
            return {done: true}
        }
    };
}

let r = range2(3, 8);
for (let n of r) {
    console.log(n);
    // throw new Error('shit');
}

console.log('-------------');

function range3(start, end) {
    let i = start;
    return {
        [Symbol.iterator]() {
            return this;
        },
        next() {
            return i < end ?
                {value: i++, done: false} :
                {done: true}
        },
        return() {
            console.log('return');
            return {done: true}
        },
        throw(e) {
            i = end;
            return {done: true};
        }
    };
}

let r2 = range3(3, 8);
for (let n of r2) {
    console.log(n);
    r2.throw(new Error());
}