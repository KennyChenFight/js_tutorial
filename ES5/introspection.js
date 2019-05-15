function Car() {}
Car.prototype.wheels = 4;

function SportsCar() {}
SportsCar.prototype = new Car();
SportsCar.prototype.doors = 2;

var sportsCar = new SportsCar();
console.log(sportsCar.doors);
console.log(sportsCar.wheels);
console.log(sportsCar.constructor);

console.log('---------------');

function Car2() {
    Car2.prototype.wheels = 4;
}
function SportsCar2() {
    SportsCar2.prototype = new Car2();
    SportsCar2.prototype.doors = 2;
}
var sportsCar = new SportsCar2();
console.log(sportsCar.doors);
console.log(sportsCar.wheels);
