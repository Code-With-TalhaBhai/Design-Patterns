// Hides the Complexity

class PowerSupply {
  providePower(): void {
    console.log("Power Supply: Providing power...");
  }
}

class CoolingSystem {
  startFans(): void {
    console.log("Cooling System: Fans started...");
  }
}

class CPU {
  initialize(): void {
    console.log("CPU: Initialization started...");
  }
}

class Memory {
  selfTest(): void {
    console.log("Memory: Self-test passed...");
  }
}

class HardDrive {
  spinUp(): void {
    console.log("Hard Drive: Spinning up...");
  }
}


class BIOS {
    boot(cpu:CPU,memory:Memory){
        console.log('BIOS: Booting CPU and Memory checks...')
        cpu.initialize()
        memory.selfTest()
    }
}


class OperatingSystem {
    load(): void{
        console.log('Operating system loaded into memory....')
    }
}



class ComputerFacade {
    private powersupply: PowerSupply
    private coolingsystem: CoolingSystem
    private cpu: CPU
    private memory: Memory
    private hard_drive: HardDrive
    private bios: BIOS
    private os: OperatingSystem

    constructor(){
        this.powersupply = new PowerSupply()
        this.coolingsystem = new CoolingSystem()
        this.cpu = new CPU()
        this.memory = new Memory()
        this.hard_drive = new HardDrive()
        this.bios = new BIOS()
        this.os = new OperatingSystem()
    }


    startComputer():void{
        this.powersupply.providePower()
        this.coolingsystem.startFans()
        this.bios.boot(this.cpu,this.memory)
        this.hard_drive.spinUp()
        this.os.load()
    }

}   



const computer_facade = new ComputerFacade()
computer_facade.startComputer()