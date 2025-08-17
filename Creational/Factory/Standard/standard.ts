interface Burger {
    prepare(): void
}


interface Factory {
    create_burger(type:string): void
}

export class Simple_Burger_Factory implements Factory{
    create_burger(type:string): Burger | undefined{
        if (type === 'simple'){
            return new Simple_Burger()
        }
        else if(type === 'standard'){
            return new Standard_Burger()
        }
        else if(type === 'premium'){
            return new Premium_Burger()
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


export class Chicken_Burger_Factory implements Factory{
    create_burger(type:string): Burger | undefined{
        if (type === 'simple'){
            return new Simple_Chicken_Burger()
        }
        else if(type === 'standard'){
            return new Standard_Chicken_Burger()
        }
        else if(type === 'premium'){
            return new Premium_Chicken_Burger()
        }
    }
}


export class Simple_Chicken_Burger implements Burger{
    prepare(){
        console.log('Preparing Simple Chicken Burger...')
    }
}  

export class Standard_Chicken_Burger implements Burger{
    prepare(){
        console.log('Preparing Standard Chicken Burger...')
    }
}  

export class Premium_Chicken_Burger implements Burger{
    prepare(){
        console.log('Preparing Premium Chicken Burger...')
    }
}   


const simple_burger = new Simple_Burger_Factory()
simple_burger.create_burger('standard')?.prepare()


const chicken_burger = new Chicken_Burger_Factory()
chicken_burger.create_burger('premium')?.prepare()