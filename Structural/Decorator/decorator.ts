// Adding additional properties to object without modifying it.

interface Character {
    getAbilities(): string
}


class Mario implements Character{
    getAbilities(): string{
        return "Mario"
    }
}

abstract class classDecorator implements Character{
    protected charactor : Character;

    constructor(c: Character){
        this.charactor = c
    }
    abstract getAbilities(): string
}


export class HeightUp extends classDecorator {
    getAbilities(): string {
        return this.charactor.getAbilities() + ' heights up'
    }
}


export class PowerUp extends classDecorator {
    getAbilities(): string {
        return this.charactor.getAbilities() + ' power ups'
    }
}


export class JumpUp extends classDecorator {
    getAbilities(): string {
        return this.charactor.getAbilities() + " jumps up"
    }
}



let mario = new Mario()


mario = new HeightUp(mario)
console.log(mario.getAbilities())


mario = new PowerUp(mario)
console.log(mario.getAbilities())


mario = new JumpUp(mario)
console.log(mario.getAbilities())
