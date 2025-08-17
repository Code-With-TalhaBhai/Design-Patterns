// Bridge decouples an abstraction from its implementations from its implementation, so both can vary independentaly
// 1. Abstractions ----> High-Level layer
// 2. Implementation ----> Low-level Layer
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var PetrolEngine = /** @class */ (function () {
    function PetrolEngine() {
    }
    PetrolEngine.prototype.start = function () {
        console.log('Petrol engine starting with ignition...');
    };
    return PetrolEngine;
}());
var DieselEngine = /** @class */ (function () {
    function DieselEngine() {
    }
    DieselEngine.prototype.start = function () {
        console.log('Diesel Engine roaring to start....');
    };
    return DieselEngine;
}());
var ElecticEngine = /** @class */ (function () {
    function ElecticEngine() {
    }
    ElecticEngine.prototype.start = function () {
        console.log('Electric engine silently starts....');
    };
    return ElecticEngine;
}());
var Car = /** @class */ (function () {
    function Car(engine) {
        this.engine = engine;
    }
    return Car;
}());
var Toyotta = /** @class */ (function (_super) {
    __extends(Toyotta, _super);
    function Toyotta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Toyotta.prototype.drive = function () {
        this.engine.start();
        console.log('Toyotta starts driving....\n');
    };
    return Toyotta;
}(Car));
var Audi = /** @class */ (function (_super) {
    __extends(Audi, _super);
    function Audi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Audi.prototype.drive = function () {
        this.engine.start();
        console.log('Audi starts driving....\n');
    };
    return Audi;
}(Car));
var Tesla = /** @class */ (function (_super) {
    __extends(Tesla, _super);
    function Tesla() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tesla.prototype.drive = function () {
        this.engine.start();
        console.log('Tesla starts driving....\n');
    };
    return Tesla;
}(Car));
var petrol_engine = new PetrolEngine();
var diesel_engine = new DieselEngine();
var electric_engine = new ElecticEngine();
var toyotta = new Toyotta(petrol_engine);
var audi = new Audi(diesel_engine);
var tesla = new Tesla(electric_engine);
toyotta.drive();
audi.drive();
tesla.drive();
