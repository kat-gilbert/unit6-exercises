import Shape from "./shape";

class Triangle implements Shape {
    base: number;
    height: number;

    constructor (base: number, height: number) {
        this.base = base;
        this.height = height;
    }

    getArea(): number { //needed for interface
        return .5 * (this.base * this.height);
    }
}

export default Triangle;