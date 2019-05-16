let x;
let y;
let o = {
    x,
    y,
    doSome() {

    },
    doOther() {

    }
};

let a = {
    doABC() {
        return super.toString();
    }
};

let prefix = 'doSome';
let n = 1;
let g = {
    [prefix + n]() {

    }
};

console.log('-----------');

let hook = Symbol('some method hook');
o = {
    [hook]() {
        console.log('do some....');
    }
};
console.log(o[hook])
o[hook]();

console.log('------------');

o = {
    [Symbol.toStringTag]: 'Foo'
};
console.log(o.toString());

console.log('-----------');

o = {
    [Symbol.toPrimitive]() {
        return 10;
    }
};
console.log(2 + o);
console.log(o.valueOf());

console.log('-----------');

function Foo() {};
let foo = new Foo();
console.log(foo instanceof Foo);
console.log(Foo[Symbol.hasInstance](foo));
