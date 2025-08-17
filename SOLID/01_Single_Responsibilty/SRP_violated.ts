// Product class representing any item in eCommerce.
export class Product {
    name: string;
    price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }
}

// Violating SRP: ShoppingCart is handling multiple responsibilities
export class ShoppingCart {
    private products: Product[] = [];

    addProduct(p: Product): void {
        this.products.push(p);
    }

    getProducts(): Product[] {
        return this.products;
    }

    // 1. Calculates total price in cart.
    calculateTotal(): number {
        return this.products.reduce((total, p) => total + p.price, 0);
    }

    // 2. Violating SRP - Prints invoice (Should be in a separate class)
    printInvoice(): void {
        console.log("Shopping Cart Invoice:");
        for (const p of this.products) {
            console.log(`${p.name} - Rs ${p.price}`);
        }
        console.log(`Total: Rs ${this.calculateTotal()}`);
    }

    // 3. Violating SRP - Saves to DB (Should be in a separate class)
    saveToDatabase(): void {
        console.log("Saving shopping cart to database...");
    }
}

// Main function equivalent
const cart = new ShoppingCart();

cart.addProduct(new Product("Laptop", 50000));
cart.addProduct(new Product("Mouse", 2000));

cart.printInvoice();  
cart.saveToDatabase();
