"use strict";
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
var Simple_Burger = /** @class */ (function () {
    function Simple_Burger() {
    }
    Simple_Burger.prototype.prepare = function () {
        console.log('Preparing simple burger....');
    };
    return Simple_Burger;
}());
var Premium_Burger = /** @class */ (function () {
    function Premium_Burger() {
    }
    Premium_Burger.prototype.prepare = function () {
        console.log('Preparing premium burger....');
    };
    return Premium_Burger;
}());
var Chicken_Burger = /** @class */ (function () {
    function Chicken_Burger() {
    }
    Chicken_Burger.prototype.prepare = function () {
        console.log('Preparing chicken burger');
    };
    return Chicken_Burger;
}());
var Chicken_Premium_Burger = /** @class */ (function () {
    function Chicken_Premium_Burger() {
    }
    Chicken_Premium_Burger.prototype.prepare = function () {
        console.log('Preparing chicken premium burger');
    };
    return Chicken_Premium_Burger;
}());
var Simple_Bread = /** @class */ (function () {
    function Simple_Bread() {
    }
    Simple_Bread.prototype.making = function () {
        console.log('Preparing simple bread....');
    };
    return Simple_Bread;
}());
var Premium_Bread = /** @class */ (function () {
    function Premium_Bread() {
    }
    Premium_Bread.prototype.making = function () {
        console.log('Preparing premium simple bread....');
    };
    return Premium_Bread;
}());
var Chicken_Garlic_Bread = /** @class */ (function () {
    function Chicken_Garlic_Bread() {
    }
    Chicken_Garlic_Bread.prototype.making = function () {
        console.log('Preparing simple chicken burger....');
    };
    return Chicken_Garlic_Bread;
}());
var Chicken_Premium_Garlic_Bread = /** @class */ (function () {
    function Chicken_Premium_Garlic_Bread() {
    }
    Chicken_Premium_Garlic_Bread.prototype.making = function () {
        console.log('Preparing chicken premium burger....');
    };
    return Chicken_Premium_Garlic_Bread;
}());
var Simple_Factory = /** @class */ (function () {
    function Simple_Factory() {
    }
    Simple_Factory.prototype.makeBurger = function (type) {
        if (type === 'simple') {
            return new Simple_Burger();
        }
        else if (type === 'premium') {
            return new Premium_Burger();
        }
        return null;
    };
    Simple_Factory.prototype.makeBread = function (type) {
        if (type === 'simple') {
            return new Simple_Bread();
        }
        else if (type === 'premium') {
            return new Premium_Bread();
        }
        return null;
    };
    return Simple_Factory;
}());
var Chicken_Factory = /** @class */ (function () {
    function Chicken_Factory() {
    }
    Chicken_Factory.prototype.makeBurger = function (type) {
        if (type === 'simple') {
            return new Chicken_Burger();
        }
        else if (type === 'premium') {
            return new Chicken_Premium_Burger();
        }
        return null;
    };
    Chicken_Factory.prototype.makeBread = function (type) {
        if (type === 'simple') {
            return new Chicken_Garlic_Bread();
        }
        else if (type === 'premium') {
            return new Chicken_Garlic_Bread();
        }
        return null;
    };
    return Chicken_Factory;
}());
var simple_factory = new Simple_Factory();
(_a = simple_factory.makeBurger('simple')) === null || _a === void 0 ? void 0 : _a.prepare();
(_b = simple_factory.makeBread('premium')) === null || _b === void 0 ? void 0 : _b.making();
console.log();
var chicken_factory = new Chicken_Factory();
(_c = chicken_factory.makeBurger('premium')) === null || _c === void 0 ? void 0 : _c.prepare();
(_d = chicken_factory.makeBread('simple')) === null || _d === void 0 ? void 0 : _d.making();
