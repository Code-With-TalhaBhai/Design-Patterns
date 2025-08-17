

interface Burger {
    prepare(): void
}


class Simple_Burger implements Burger {
    prepare(): void {
        console.log('Preparing simple burger....')
    }
}

class Premium_Burger implements Burger{
    prepare(): void {
        console.log('Preparing premium burger....')
    }
}


class Chicken_Burger implements Burger {
    prepare(): void {
        console.log('Preparing chicken burger')
    }
}


class Chicken_Premium_Burger implements Burger {
    prepare(): void {
        console.log('Preparing chicken premium burger')
    }
}


interface Garlic_Bread {
    making(): void
}


class Simple_Bread implements Garlic_Bread {
    making(): void {
        console.log('Preparing simple bread....')
    }
}

class Premium_Bread implements Garlic_Bread {
    making(): void {
        console.log('Preparing premium simple bread....')
    }
}


class Chicken_Garlic_Bread implements Garlic_Bread {
    making(): void {
        console.log('Preparing simple chicken burger....')
    }
}


class Chicken_Premium_Garlic_Bread implements Garlic_Bread {
    making(): void {
        console.log('Preparing chicken premium burger....')
    }
}


interface Factory {
    makeBurger(type:string): Burger | null
    makeBread(type: string): Garlic_Bread | null
}


class Simple_Factory implements Factory{
    makeBurger(type: string){
        if (type === 'simple'){
            return new Simple_Burger()
        }
        else if(type === 'premium'){
            return new Premium_Burger()
        }
        return null
    }

    makeBread(type: string): Garlic_Bread | null {
        if(type === 'simple'){
            return new Simple_Bread()
        }
        else if(type === 'premium'){
            return new Premium_Bread()
        }
        return null
    }
}


class Chicken_Factory implements Factory {
    makeBurger(type: string): Burger | null {
        if(type === 'simple'){
            return new Chicken_Burger()
        }
        else if(type === 'premium'){
            return new Chicken_Premium_Burger()
        }
        return null
    }
    makeBread(type: string): Garlic_Bread | null {
        if(type === 'simple'){
            return new Chicken_Garlic_Bread()
        }
        else if(type === 'premium'){
            return new Chicken_Garlic_Bread()
        }
        return null
    }
}



const simple_factory = new Simple_Factory()
simple_factory.makeBurger('simple')?.prepare()
simple_factory.makeBread('premium')?.making()
console.log()
const chicken_factory = new Chicken_Factory()
chicken_factory.makeBurger('premium')?.prepare()
chicken_factory.makeBread('simple')?.making()