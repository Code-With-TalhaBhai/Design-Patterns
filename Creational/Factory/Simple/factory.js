var Burger_Factory = /** @class */ (function () {
    function Burger_Factory() {
    }
    Burger_Factory.prototype.create_burger = function (type) {
        if (type === 'simple') {
            return new Simple_Burger();
        }
        else if (type === 'standard') {
            return new Standard_Burger();
        }
        else if (type === 'premium') {
            return new Premium_Burger;
        }
    };
    return Burger_Factory;
}());
var Simple_Burger = /** @class */ (function () {
    function Simple_Burger() {
    }
    Simple_Burger.prototype.prepare = function () {
        console.log('Preparing Simple Burger...');
    };
    return Simple_Burger;
}());
var Standard_Burger = /** @class */ (function () {
    function Standard_Burger() {
    }
    Standard_Burger.prototype.prepare = function () {
        console.log('Preparing Standard Burger...');
    };
    return Standard_Burger;
}());
var Premium_Burger = /** @class */ (function () {
    function Premium_Burger() {
    }
    Premium_Burger.prototype.prepare = function () {
        console.log('Preparing Premium Burger...');
    };
    return Premium_Burger;
}());
var burger_factory = new Burger_Factory();
var burger = burger_factory.create_burger('standard');
burger === null || burger === void 0 ? void 0 : burger.prepare();
