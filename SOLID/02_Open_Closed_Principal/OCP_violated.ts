

export class Product {
    name: string
    price: number

    constructor(name,price){
        this.name = name
        this.price = price
    }
}

// 1. ShoppingCart: Only responsible for cart-related business logic.
export class ShoppingCart {
    private products: Product[] = [];

    addProduct(p: Product): void {
        this.products.push(p);
    }

    getProducts(): Product[] {
        return this.products;
    }

    // Calculates total price in cart.
    calculateTotal(): number {
        return this.products.reduce((total, p) => total + p.price, 0);
    }
}

class ShoppingCartStorage {
    private cart : ShoppingCart

    constructor(cart: ShoppingCart){
        this.cart = cart
    }


    saveToMongoDb():void{
        console.log('saving to mongodb.........')
    }
    savetoMySql(): void{
        console.log('saving to sql..............')
    }
    savetoFile(): void{
        console.log('saving to file storage.........')
    }
}


const cart = new ShoppingCart();
cart.addProduct(new Product("Laptop", 50000));
cart.addProduct(new Product("Mouse", 2000));


const shopping_storage = new ShoppingCartStorage(cart);
shopping_storage.saveToMongoDb()
shopping_storage.savetoMySql()
shopping_storage.savetoFile()
