// Separate interface for 2D shapes
interface TwoDimensionalShape {
    area(): number;
}

// Separate interface for 3D shapes
interface ThreeDimensionalShape {
    area(): number;
    volume(): number;
}

// Square implements only the 2D interface
export class Square implements TwoDimensionalShape {
    private side: number;

    constructor(side: number) {
        this.side = side;
    }

    area(): number {
        return this.side * this.side;
    }
}

// Rectangle implements only the 2D interface
export class Rectangle implements TwoDimensionalShape {
    private length: number;
    private width: number;

    constructor(length: number, width: number) {
        this.length = length;
        this.width = width;
    }

    area(): number {
        return this.length * this.width;
    }
}

// Cube implements the 3D interface
export class Cube implements ThreeDimensionalShape {
    private side: number;

    constructor(side: number) {
        this.side = side;
    }

    area(): number {
        return 6 * this.side * this.side;
    }

    volume(): number {
        return this.side * this.side * this.side;
    }
}

// Main simulation
const square: TwoDimensionalShape = new Square(5);
const rectangle: TwoDimensionalShape = new Rectangle(4, 6);
const cube: ThreeDimensionalShape = new Cube(3);

console.log("Square Area:", square.area());
console.log("Rectangle Area:", rectangle.area());
console.log("Cube Area:", cube.area());
console.log("Cube Volume:", cube.volume());

