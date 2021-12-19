import GasCar from "../src/cargas";

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
        expect(newCar.isFuelEmpty()).toBe(true);
    });
    test("isfuelempty return false when fuel > 0", function(){
        let newCar: GasCar = new GasCar("Team 2", 10);
        expect(newCar.isFuelEmpty()).toBe(false);
    });
});
