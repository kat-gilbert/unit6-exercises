import Shape from "./shape";

class Circle implements Shape {
    radius: number;

    constructor (radius: number) {
        this.radius = radius;
    }

    getArea(): number { //needed for interface
        return Math.PI * (this.radius * this.radius);
    }
}

export default Circle;