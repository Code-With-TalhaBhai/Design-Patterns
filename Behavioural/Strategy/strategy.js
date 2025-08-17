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
// --- Concrete Strategies for Walk ---
var NormalWalk = /** @class */ (function () {
    function NormalWalk() {
    }
    NormalWalk.prototype.walk = function () {
        console.log("Walking normally...");
    };
    return NormalWalk;
}());
var NoWalk = /** @class */ (function () {
    function NoWalk() {
    }
    NoWalk.prototype.walk = function () {
        console.log("Cannot walk.");
    };
    return NoWalk;
}());
// --- Concrete Strategies for Talk ---
var NormalTalk = /** @class */ (function () {
    function NormalTalk() {
    }
    NormalTalk.prototype.talk = function () {
        console.log("Talking normally...");
    };
    return NormalTalk;
}());
var NoTalk = /** @class */ (function () {
    function NoTalk() {
    }
    NoTalk.prototype.talk = function () {
        console.log("Cannot talk.");
    };
    return NoTalk;
}());
// --- Concrete Strategies for Fly ---
var NormalFly = /** @class */ (function () {
    function NormalFly() {
    }
    NormalFly.prototype.fly = function () {
        console.log("Flying normally...");
    };
    return NormalFly;
}());
var NoFly = /** @class */ (function () {
    function NoFly() {
    }
    NoFly.prototype.fly = function () {
        console.log("Cannot fly.");
    };
    return NoFly;
}());
// --- Robot Base Class ---
var Robot = /** @class */ (function () {
    function Robot(w, t, f) {
        this.walkBehavior = w;
        this.talkBehavior = t;
        this.flyBehavior = f;
    }
    Robot.prototype.walk = function () {
        this.walkBehavior.walk();
    };
    Robot.prototype.talk = function () {
        this.talkBehavior.talk();
    };
    Robot.prototype.fly = function () {
        this.flyBehavior.fly();
    };
    return Robot;
}());
// --- Concrete Robot Types ---
var CompanionRobot = /** @class */ (function (_super) {
    __extends(CompanionRobot, _super);
    function CompanionRobot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CompanionRobot.prototype.projection = function () {
        console.log("Displaying friendly companion features...");
    };
    return CompanionRobot;
}(Robot));
var WorkerRobot = /** @class */ (function (_super) {
    __extends(WorkerRobot, _super);
    function WorkerRobot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WorkerRobot.prototype.projection = function () {
        console.log("Displaying worker efficiency stats...");
    };
    return WorkerRobot;
}(Robot));
// --- Main Simulation ---
var robot1 = new CompanionRobot(new NormalWalk(), new NormalTalk(), new NoFly());
robot1.walk();
robot1.talk();
robot1.fly();
robot1.projection();
console.log();
console.log("--------------------");
console.log();
var robot2 = new WorkerRobot(new NoWalk(), new NoTalk(), new NormalFly());
robot2.walk();
robot2.talk();
robot2.fly();
robot2.projection();
