console.log(1 + 2 + '3');
console.log('1' + 2 + 3);
console.log('1' + (2 + 3));

console.log('-------------');

var date = new Date();
console.log(date.valueOf());
console.log(date > new Date());
var obj = {
    valueOf : function() {
        return 100;
    }
}
console.log(1 + obj);
console.log(1 > obj);

console.log('--------------');

var o1 = {};
var o2 = {};
console.log(o1.valueOf());
console.log(o2);
console.log(o1 >= o2);
console.log(o1 > o2);
// ===用來比較物件時，使比較是否參考同一物件
// ==得留意兩邊的運算元是否有型態轉換後再比較的可能性
console.log(o1 === o2);

console.log('----------');

console.log('x' in {x : 10});

console.log('-------------');

console.log([] instanceof Array);
console.log([] instanceof Object);
console.log([] instanceof Date);

console.log('------------');

console.log(typeof 1);
console.log(typeof '');
console.log(typeof true);
console.log(typeof function(){});
console.log(typeof undefined);
console.log(typeof {});
console.log(typeof null);

console.log('--------------');

console.log('left' && 'right');
console.log(0 && 'right');
console.log('left' && 0);
console.log('right' || 'left');
console.log(0 || 'left');
console.log('right' || 0);

console.log('------------');

function doSome(arg) {
    var option = arg || 'default';
    return option;
}
console.log(doSome());
console.log(doSome('Kenny'));

console.log('------------');

// void 運算子放在任何資料或運算式之前，都會產生 undefined
console.log(void 0);
console.log(typeof void 0);