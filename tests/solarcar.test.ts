import SolarCar from "../src/carsolar";
import { Racer } from "../src/carracer";

describe("Testing SolarCar", function() {
    test("if team property is set from constructor", function(){
        let newCar: SolarCar = new SolarCar("Team 1");
        expect(newCar.team).toBe("Team 1");
    });
    test("if speed is set from constructor", function(){
        let newCar: SolarCar = new SolarCar("Team 1");
        expect(newCar.speed).toBe(0);
    });
    test("if calling accelerate brings speed to 1", function(){
        let newCar: SolarCar = new SolarCar("Team 1");
        newCar.accelerate();
        expect(newCar.speed).toBe(1);
    });
    test("if calling accelerate twice brings speed to 2", function(){
        let newCar: SolarCar = new SolarCar("Team 1");
        newCar.accelerate();
        newCar.accelerate();
        expect(newCar.speed).toBe(2);
    });
    test("if checking fuel empty returns zero", function(){
        let newCar: SolarCar = new SolarCar("Team 1");
        expect(newCar.isFuelEmpty()).toBe(false);
    });
});
