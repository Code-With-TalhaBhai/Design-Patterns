// Hides the Complexity
var PowerSupply = /** @class */ (function () {
    function PowerSupply() {
    }
    PowerSupply.prototype.providePower = function () {
        console.log("Power Supply: Providing power...");
    };
    return PowerSupply;
}());
var CoolingSystem = /** @class */ (function () {
    function CoolingSystem() {
    }
    CoolingSystem.prototype.startFans = function () {
        console.log("Cooling System: Fans started...");
    };
    return CoolingSystem;
}());
var CPU = /** @class */ (function () {
    function CPU() {
    }
    CPU.prototype.initialize = function () {
        console.log("CPU: Initialization started...");
    };
    return CPU;
}());
var Memory = /** @class */ (function () {
    function Memory() {
    }
    Memory.prototype.selfTest = function () {
        console.log("Memory: Self-test passed...");
    };
    return Memory;
}());
var HardDrive = /** @class */ (function () {
    function HardDrive() {
    }
    HardDrive.prototype.spinUp = function () {
        console.log("Hard Drive: Spinning up...");
    };
    return HardDrive;
}());
var BIOS = /** @class */ (function () {
    function BIOS() {
    }
    BIOS.prototype.boot = function (cpu, memory) {
        console.log('BIOS: Booting CPU and Memory checks...');
        cpu.initialize();
        memory.selfTest();
    };
    return BIOS;
}());
var OperatingSystem = /** @class */ (function () {
    function OperatingSystem() {
    }
    OperatingSystem.prototype.load = function () {
        console.log('Operating system loaded into memory....');
    };
    return OperatingSystem;
}());
var ComputerFacade = /** @class */ (function () {
    function ComputerFacade() {
        this.powersupply = new PowerSupply();
        this.coolingsystem = new CoolingSystem();
        this.cpu = new CPU();
        this.memory = new Memory();
        this.hard_drive = new HardDrive();
        this.bios = new BIOS();
        this.os = new OperatingSystem();
    }
    ComputerFacade.prototype.startComputer = function () {
        this.powersupply.providePower();
        this.coolingsystem.startFans();
        this.bios.boot(this.cpu, this.memory);
        this.hard_drive.spinUp();
        this.os.load();
    };
    return ComputerFacade;
}());
var computer_facade = new ComputerFacade();
computer_facade.startComputer();
