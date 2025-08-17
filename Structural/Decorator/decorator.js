"use strict";
// Adding additional properties to object without modifying it.
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.JumpUp = exports.PowerUp = exports.HeightUp = void 0;
var Mario = /** @class */ (function () {
    function Mario() {
    }
    Mario.prototype.getAbilities = function () {
        return "Mario";
    };
    return Mario;
}());
var classDecorator = /** @class */ (function () {
    function classDecorator(c) {
        this.charactor = c;
    }
    return classDecorator;
}());
var HeightUp = /** @class */ (function (_super) {
    __extends(HeightUp, _super);
    function HeightUp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HeightUp.prototype.getAbilities = function () {
        return this.charactor.getAbilities() + ' heights up';
    };
    return HeightUp;
}(classDecorator));
exports.HeightUp = HeightUp;
var PowerUp = /** @class */ (function (_super) {
    __extends(PowerUp, _super);
    function PowerUp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PowerUp.prototype.getAbilities = function () {
        return this.charactor.getAbilities() + ' power ups';
    };
    return PowerUp;
}(classDecorator));
exports.PowerUp = PowerUp;
var JumpUp = /** @class */ (function (_super) {
    __extends(JumpUp, _super);
    function JumpUp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    JumpUp.prototype.getAbilities = function () {
        return this.charactor.getAbilities() + " jumps up";
    };
    return JumpUp;
}(classDecorator));
exports.JumpUp = JumpUp;
var mario = new Mario();
mario = new HeightUp(mario);
console.log(mario.getAbilities());
mario = new PowerUp(mario);
console.log(mario.getAbilities());
mario = new JumpUp(mario);
console.log(mario.getAbilities());
