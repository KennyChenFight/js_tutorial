class Circle {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
    }

    area() {
        return this.r * this.r * Circle.PI();
    }

    toString() {
        let text = [];
        for (let p in this) {
            if (typeof this[p] != 'function') {
                text.push(p + ':' + this[p]);
            }
        }
        return '[' + text.join() + ']';
    }

    static PI() {
        return 3.14159;
    }
}

class Cylinder extends Circle {
    constructor(x, y, r, h) {
        super(x, y, r);
        this.h = h;
    }

    volumn() {
        return this.area() * this.h;
    }
}

let cylinder = new Cylinder(0, 0, 10, 5);
console.log(cylinder.area());
console.log(cylinder.toString());
console.log(cylinder.volumn());
console.log(Cylinder.PI());

console.log('--------------');

class A {
    toString() {
        return 'A';
    }
}

class B extends A {
    toString() {
        return super.toString() + 'B';
    }
}
let b = new B();
console.log(b.toString());

console.log('----------');

class MyArray extends Array {}
let myArray = new MyArray();
myArray[0] = 1;
myArray[1] = 10;
console.log(myArray.length);
console.log(myArray instanceof Array);