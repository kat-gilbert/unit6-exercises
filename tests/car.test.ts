import SolarCar from "../src/carsolar";
import { Racer } from "../src/carracer";
import GasCar from "../src/cargas";
import {findAverageSpeed, findRacersWithEmptyFuel, getFasterRacer} from "../src/carfunctions";


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
        newCar.isFuelEmpty();
        expect(newCar.isFuelEmpty).toBe(false);
    });
});

describe("Testing GasCar", function() {
    test("if team property is set from constructor", function(){
        let newCar: GasCar = new GasCar("Team 2", 20);
        expect(newCar.team).toBe("Team 2");
    });
    test("if fuel property is set from constructor", function(){
        let newCar: GasCar = new GasCar("Team 2", 20);
        expect(newCar.fuel).toBe(20);
    });
    test("if fuel defaults to ten if nothinh is set", function(){
        let newCar: GasCar = new GasCar("Team 2");
        expect(newCar.fuel).toBe(10);
        });      
    test("speed starts at 0", function(){
        let newCar: GasCar = new GasCar("Team 2", 20);
        expect(newCar.speed).toBe(0);
    });
    test("accelerate once brings speed to 2", function(){
        let newCar: GasCar = new GasCar("Team 2", 20);
        newCar.accelerate();
        expect(newCar.speed).toBe(2);
    });
    test("accelerate twice brings speed to 4", function(){
        let newCar: GasCar = new GasCar("Team 2", 20);
        newCar.accelerate();
        newCar.accelerate();
        expect(newCar.speed).toBe(4);
    });
    test("accelerate once brings fuel down 1", function(){
        let newCar: GasCar = new GasCar("Team 2", 20);
        newCar.accelerate();
        expect(newCar.fuel).toBe(19);
    });
    test("accelerate twice brings fuel down 2", function(){
        let newCar: GasCar = new GasCar("Team 2", 20);
        newCar.accelerate();
        newCar.accelerate();
        expect(newCar.fuel).toBe(18);
    });
    test("isfuelempty return true when fuel = 0", function(){
        let newCar: GasCar = new GasCar("Team 2", 0);
        expect(newCar.isFuelEmpty).toBe(true);
    });
    test("isfuelempty return false when fuel > 0", function(){
        let newCar: GasCar = new GasCar("Team 2", 10);
        expect(newCar.isFuelEmpty).toBe(false);
    });
});

// describe("Car Functions", function() {
//     test("", function(){
//         expect(findAverageSpeed()).toBe(0);
//     });
// });