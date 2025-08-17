// Bridge decouples an abstraction from its implementations from its implementation, so both can vary independentaly
// 1. Abstractions ----> High-Level layer
// 2. Implementation ----> Low-level Layer



interface Engine {
    start(): void
}


class PetrolEngine implements Engine {
    start(): void{
        console.log('Petrol engine starting with ignition...')
    }
}

class DieselEngine implements Engine {
    start(): void{
        console.log('Diesel Engine roaring to start....')
    }
}

class ElecticEngine implements Engine {
    start(): void{
        console.log('Electric engine silently starts....')
    }
}



abstract class Car {
    protected engine: Engine

    constructor(engine: Engine)
    {
        this.engine = engine
    }
    abstract drive(): void
}



class Toyotta extends Car {
    drive(): void {
        this.engine.start()
        console.log('Toyotta starts driving....\n')
    }
}

class Audi extends Car {
    drive(): void{
        this.engine.start()
        console.log('Audi starts driving....\n')
    }
}

class Tesla extends Car {
    drive(): void{
        this.engine.start()
        console.log('Tesla starts driving....\n')
    }
}



const petrol_engine = new PetrolEngine()
const diesel_engine = new DieselEngine()
const electric_engine = new ElecticEngine()


let toyotta = new Toyotta(petrol_engine)
let audi = new Audi(diesel_engine)
let tesla = new Tesla(electric_engine)


toyotta.drive()
audi.drive()
tesla.drive()