var result = '3' - '2';
console.log(result);
console.log(typeof result);

console.log('-------------');

var number = 10;
console.log(number.toString(2));
console.log((10).toString(2));

console.log('--------------');

console.log('kenny'.toUpperCase());

console.log('--------------');

console.log(typeof 10);
console.log(typeof 'kenny');
console.log(typeof new Number(10));
console.log(typeof new String('kenny'));

console.log('-------------');

console.log(parseInt('10 years old...XD'));
console.log(parseFloat('3.14159........'));
console.log(parseInt('0x10'));
console.log(parseInt('010'));
console.log(parseInt('010', 10));
console.log(parseInt('010', 8));

console.log('------------');

console.log('6' + '2');
console.log('6' - '2');
console.log('6' * '2');
console.log('6' / '2');

console.log('-------------');

console.log(1 + true);
console.log(1 + false);

console.log('-------------');

// 在js中，只有以下為false
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(''));
console.log(Boolean(null));
console.log(Boolean(undefined));

console.log('--------------');

var o = {};
console.log(o.x ? 'has x' : 'has no x');
o.x = 10;
console.log(o.x ? 'has x' : 'has no x');

console.log('---------------');

// == : 會嘗試將兩邊轉萬為同一型態再比較是否相等
// === : 兩邊只要型態不一，就會判斷為false
console.log('' == 0);
console.log('' === 0);
console.log(null == undefined);
console.log(null === undefined);
console.log(1 == true);
console.log(1 === true);