// Product class representing any item in eCommerce.
export class Product {
    name: string;
    price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
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

// Abstract Persistence Interface
interface Persistence {
    save(cart: ShoppingCart): void;
}

// SQL Persistence
class SQLPersistence implements Persistence {
    save(cart: ShoppingCart): void {
        console.log("Saving shopping cart to SQL DB...");
    }
}

// MongoDB Persistence
class MongoPersistence implements Persistence {
    save(cart: ShoppingCart): void {
        console.log("Saving shopping cart to MongoDB...");
    }
}

// File Persistence
class FilePersistence implements Persistence {
    save(cart: ShoppingCart): void {
        console.log("Saving shopping cart to a file...");
    }
}

// Main equivalent
const cart = new ShoppingCart();
cart.addProduct(new Product("Laptop", 50000));
cart.addProduct(new Product("Mouse", 2000));

const sqlDb: Persistence = new SQLPersistence();
const mongoDb: Persistence = new MongoPersistence();
const fileDb: Persistence = new FilePersistence();

sqlDb.save(cart);   // Save to SQL
mongoDb.save(cart); // Save to MongoDB
fileDb.save(cart);  // Save to File
