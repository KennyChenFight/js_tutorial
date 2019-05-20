class Person {
    constructor(name, age) {
        this.__name__ = name;
        this.__age__ = age;
    }

    toString() {
        return `[${this.name}, ${this.age}]`
    }

    get name() {
        return this.__name__;
    }

    get age() {
        return this.__age__;
    }
}
let p = new Person('Kenny', 23);
console.log(p.name);

console.log('-----------------');

class Range {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }

    [Symbol.iterator]() {
        let i = this.start;
        let end = this.end;

        return {
            next() {
                return i < end ?
                            {value: i++, done: false} : 
                            {value: undefined, done: true}
            }
        };
    }
    
    toString() {
        return `Range [${this.start}...${this.end - 1}]`;
    }
}
let range = new Range(1, 4);
for (let i of range) {
    console.log(i);
}
console.log(range.toString());

console.log('----------');

let clz = class {
    constructor(name) {this.name = name;}
};
console.log(new clz('xyz'));
var clz2 = class Xyz {
    constructor(name) {this.name = name;}
};
console.log(new clz2('xyz'));