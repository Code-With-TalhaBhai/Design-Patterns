
interface Burger {
    prepare(): void
}

export class Burger_Factory{
    create_burger(type:string): Burger | undefined{
        if (type === 'simple'){
            return new Simple_Burger()
        }
        else if(type === 'standard'){
            return new Standard_Burger()
        }
        else if(type === 'premium'){
            return new Premium_Burger
        }
    }
}


export class Simple_Burger implements Burger{
    prepare(): void {
        console.log('Preparing Simple Burger...')
    }
}

export class Standard_Burger implements Burger{
    prepare(): void {
        console.log('Preparing Standard Burger...')
    }
}

export class Premium_Burger implements Burger{
    prepare(): void {
        console.log('Preparing Premium Burger...')
    }
}



const burger_factory = new Burger_Factory()
const burger = burger_factory.create_burger('standard')
burger?.prepare()

