"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Premium_Chicken_Burger = exports.Standard_Chicken_Burger = exports.Simple_Chicken_Burger = exports.Chicken_Burger_Factory = exports.Premium_Burger = exports.Standard_Burger = exports.Simple_Burger = exports.Simple_Burger_Factory = void 0;
var Simple_Burger_Factory = /** @class */ (function () {
    function Simple_Burger_Factory() {
    }
    Simple_Burger_Factory.prototype.create_burger = function (type) {
        if (type === 'simple') {
            return new Simple_Burger();
        }
        else if (type === 'standard') {
            return new Standard_Burger();
        }
        else if (type === 'premium') {
            return new Premium_Burger();
        }
    };
    return Simple_Burger_Factory;
}());
exports.Simple_Burger_Factory = Simple_Burger_Factory;
var Simple_Burger = /** @class */ (function () {
    function Simple_Burger() {
    }
    Simple_Burger.prototype.prepare = function () {
        console.log('Preparing Simple Burger...');
    };
    return Simple_Burger;
}());
exports.Simple_Burger = Simple_Burger;
var Standard_Burger = /** @class */ (function () {
    function Standard_Burger() {
    }
    Standard_Burger.prototype.prepare = function () {
        console.log('Preparing Standard Burger...');
    };
    return Standard_Burger;
}());
exports.Standard_Burger = Standard_Burger;
var Premium_Burger = /** @class */ (function () {
    function Premium_Burger() {
    }
    Premium_Burger.prototype.prepare = function () {
        console.log('Preparing Premium Burger...');
    };
    return Premium_Burger;
}());
exports.Premium_Burger = Premium_Burger;
var Chicken_Burger_Factory = /** @class */ (function () {
    function Chicken_Burger_Factory() {
    }
    Chicken_Burger_Factory.prototype.create_burger = function (type) {
        if (type === 'simple') {
            return new Simple_Chicken_Burger();
        }
        else if (type === 'standard') {
            return new Standard_Chicken_Burger();
        }
        else if (type === 'premium') {
            return new Premium_Chicken_Burger();
        }
    };
    return Chicken_Burger_Factory;
}());
exports.Chicken_Burger_Factory = Chicken_Burger_Factory;
var Simple_Chicken_Burger = /** @class */ (function () {
    function Simple_Chicken_Burger() {
    }
    Simple_Chicken_Burger.prototype.prepare = function () {
        console.log('Preparing Simple Chicken Burger...');
    };
    return Simple_Chicken_Burger;
}());
exports.Simple_Chicken_Burger = Simple_Chicken_Burger;
var Standard_Chicken_Burger = /** @class */ (function () {
    function Standard_Chicken_Burger() {
    }
    Standard_Chicken_Burger.prototype.prepare = function () {
        console.log('Preparing Standard Chicken Burger...');
    };
    return Standard_Chicken_Burger;
}());
exports.Standard_Chicken_Burger = Standard_Chicken_Burger;
var Premium_Chicken_Burger = /** @class */ (function () {
    function Premium_Chicken_Burger() {
    }
    Premium_Chicken_Burger.prototype.prepare = function () {
        console.log('Preparing Premium Chicken Burger...');
    };
    return Premium_Chicken_Burger;
}());
exports.Premium_Chicken_Burger = Premium_Chicken_Burger;
var simple_burger = new Simple_Burger_Factory();
(_a = simple_burger.create_burger('standard')) === null || _a === void 0 ? void 0 : _a.prepare();
var chicken_burger = new Chicken_Burger_Factory();
(_b = chicken_burger.create_burger('premium')) === null || _b === void 0 ? void 0 : _b.prepare();
