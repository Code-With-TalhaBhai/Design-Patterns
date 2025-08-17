// Single interface for all shapes (Violates ISP)
interface Shape {
    area(): number;
    volume(): number; // 2D shapes don't have volume!
}

// Square is a 2D shape but is forced to implement volume()
class Square implements Shape {
    private side: number;

    constructor(s: number) {
        this.side = s;
    }

    area(): number {
        return this.side * this.side;
    }

    volume(): number {
        throw new Error("Volume not applicable for Square"); // Unnecessary method
    }
}

// Rectangle is also a 2D shape but is forced to implement volume()
class Rectangle implements Shape {
    private length: number;
    private width: number;

    constructor(l: number, w: number) {
        this.length = l;
        this.width = w;
    }

    area(): number {
        return this.length * this.width;
    }

    volume(): number {
        throw new Error("Volume not applicable for Rectangle"); // Unnecessary method
    }
}

// Cube is a 3D shape, so it actually has a volume
class Cube implements Shape {
    private side: number;

    constructor(s: number) {
        this.side = s;
    }

    area(): number {
        return 6 * this.side * this.side;
    }

    volume(): number {
        return this.side * this.side * this.side;
    }
}

// Client usage example
const square: Shape = new Square(5);
const rectangle: Shape = new Rectangle(4, 6);
const cube: Shape = new Cube(3);

console.log("Square Area:", square.area());
console.log("Rectangle Area:", rectangle.area());
console.log("Cube Area:", cube.area());
console.log("Cube Volume:", cube.volume());

try {
    console.log("Square Volume:", square.volume()); // Will throw an exception
} catch (e) {
    if (e instanceof Error) {
        console.log("Exception:", e.message);
    }
}
