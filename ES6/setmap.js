let set = new Set([1, 2, 3, 4, 5, 1, 2 ,3]);
console.log(set);
set.add(6);
set.add(3);
console.log(set);
console.log(set.has(3));
set.forEach(elem => console.log(elem));

console.log('------------');

let o1 = {x: 10};
let o2 = {x: 10};
let o3 = o2;
set = new Set([o1, o2, o3]);
console.log(set);

console.log('-----------------');

let o = {x: 10};
let map = {
    [o]: 'foo'
};
for (let p in map) {
    console.log(p);
}

console.log('-------------');

o = {x: 10};
map = new Map();
map.set(o, 'foo');
console.log(map);
map.set({y: 10}, 'foo2')
console.log(map);
for (let [key, value] of map) {
    console.log(key, value);
}
console.log(map.get(o));
console.log(map.delete(o));
console.log(map);

console.log('-----------');

map = new Map([['k1', 'v1'], ['k2', 'v2']]);
console.log(map);