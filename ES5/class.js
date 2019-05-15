function Circle(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
}
Circle.PI = 3.14159;
Circle.prototype.area = function() {
    return this.r * this.r * Circle.PI;
}
Circle.prototype.toString = function () {  
    var text = [];
    for (var p in this) {
        if (typeof this[p] != 'function') {
            text.push(p + ':' + this[p]);
        }
    }
    return '[' + text.join() + ']';
}
function Cylinder(x, y, r, h) {  
    Circle.call(this, x, y, r);
    this.h = h;
}
Cylinder.prototype = new Circle();
Cylinder.prototype.constructor = Cylinder;
delete Cylinder.prototype.x;
delete Cylinder.prototype.y;
delete Cylinder.prototype.r;
Cylinder.prototype.volumn = function () {  
    return this.area() * this.h;
};

console.log('--------------');

var Class = {};
Class.create = function(methods) {
    var Clz = methods.initialize;
    for(var mth in methods) {
        if(mth != 'initialize') {
            Clz.prototype[mth] = methods[mth];
        }
    }
    return Clz;
};

var Circle = Class.create({
    initialize : function(x, y, r) { // 作為建構式
        this.x = x;
        this.y = y;
        this.r = r;
    },
    area : function() {
        return Math.PI * Math.pow(this.r, 2);
    },
    toString : function() {
        var text = [];
        for(var p in this) {
            if(typeof this[p] != 'function') {
                text.push(p + ':' + this[p]);
            }
        }
        return '[' + text.join() + ']';
    }
});

var circle = new Circle(10, 10, 5);

Class.extend = function(Superclz, methods) {
    var Subclz = this.create(methods);
    var subproto = Subclz.prototype;
    Subclz.prototype = new Superclz();
    for(var p in Subclz.prototype) {
        if(Subclz.prototype.hasOwnProperty(p)) {
            delete Subclz.prototype[p];
        }
    }
    Subclz.prototype.constructor = Subclz;
    for(var p in subproto) {
        Subclz.prototype[p] = subproto[p];
    }
    return Subclz;
};

var Cylinder = Class.extend(Circle, {
    initialize : function(x, y, r, h) {
        Circle.call(this, x, y, r);
        this.h = h;
    },
    volumn : function() {
        return this.area() * this.h;
    }
});

var cylinder = new Cylinder(10, 10, 5, 15);
