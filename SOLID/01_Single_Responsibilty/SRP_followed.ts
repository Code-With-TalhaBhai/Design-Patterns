


// Product class representing any item in eCommerce.
export class Product {
    name: string;
    price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }
}

// 1. ShoppingCart: Only responsible for Cart related business logic.
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

// 2. ShoppingCartPrinter: Only responsible for printing invoices.
class ShoppingCartPrinter {
    private cart: ShoppingCart;

    constructor(cart: ShoppingCart) {
        this.cart = cart;
    }

    printInvoice(): void {
        console.log("Shopping Cart Invoice:");
        for (const p of this.cart.getProducts()) {
            console.log(`${p.name} - Rs ${p.price}`);
        }
        console.log(`Total: Rs ${this.cart.calculateTotal()}`);
    }
}

// 3. ShoppingCartStorage: Only responsible for saving cart to DB.
class ShoppingCartStorage {
    private cart: ShoppingCart;

    constructor(cart: ShoppingCart) {
        this.cart = cart;
    }

    saveToDatabase(): void {
        console.log("Saving shopping cart to database...");
        // Here, you'd have your database saving logic.
    }
}

// Main function equivalent
const cart = new ShoppingCart();

cart.addProduct(new Product("Laptop", 50000));
cart.addProduct(new Product("Mouse", 2000));

const printer = new ShoppingCartPrinter(cart);
printer.printInvoice();

const db = new ShoppingCartStorage(cart);
db.saveToDatabase();
