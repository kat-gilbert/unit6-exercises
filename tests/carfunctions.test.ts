import {findAverageSpeed, findRacersWithEmptyFuel, getFasterRacer} from "../src/carfunctions";
import GasCar from "../src/cargas";
import { Racer } from "../src/carracer";
import SolarCar from "../src/carsolar";


describe("Find racers wtih empty fuel function", function() {
    test("an array where some have fuel and some don't", function() {
        let racer1: GasCar = new GasCar("Team1", 0);
        let racer2: GasCar = new GasCar("Team2", 10);
        let racer3: GasCar = new GasCar("Team3", 5);
        let racers:Racer[] = [racer1, racer2, racer3];
        expect(findRacersWithEmptyFuel(racers)).toEqual([{"fuel": 0, "speed": 0, "team": "Team1"}]);
    })
    test("an array where all cars have no fuel", function() {
        let racer1: GasCar = new GasCar("Team1", 0);
        let racer2: GasCar = new GasCar("Team2", 0);
        let racer3: GasCar = new GasCar("Team3", 0);
        let racers:Racer[] = [racer1, racer2, racer3];
        expect(findRacersWithEmptyFuel(racers)).toEqual([{"fuel": 0, "speed": 0, "team": "Team1"},{"fuel": 0, "speed": 0, "team": "Team2"},{"fuel": 0, "speed": 0, "team": "Team3"}]);
    })
    test("an array where all cars have fuel equals []", function() {
        let racer1: GasCar = new GasCar("Team1", 10);
        let racer2: GasCar = new GasCar("Team2", 20);
        let racer3: GasCar = new GasCar("Team3", 30);
        let racers:Racer[] = [racer1, racer2, racer3];
        expect(findRacersWithEmptyFuel(racers)).toEqual([]);
    })
    test("an array where all cars are solar equals []", function() {
        let racer1: SolarCar = new SolarCar("Team1");
        let racer2: SolarCar = new SolarCar("Team2");
        let racer3: SolarCar = new SolarCar("Team3");
        let racers:Racer[] = [racer1, racer2, racer3];
        expect(findRacersWithEmptyFuel(racers)).toEqual([]);
    })
    test("an array where some cars are solar", function() {
        let racer1: SolarCar = new SolarCar("Team1");
        let racer2: GasCar = new GasCar("Team2", 0);
        let racer3: SolarCar = new SolarCar("Team3");
        let racers:Racer[] = [racer1, racer2, racer3];
        expect(findRacersWithEmptyFuel(racers)).toEqual([{"fuel": 0, "speed": 0, "team": "Team2"}]);
    })
    test("an empty array returns []", function() {
        let racers:Racer[] = [];
        expect(findRacersWithEmptyFuel(racers)).toEqual([]);
    })
})

describe("Average Speed Function", function() {
    test("average speed of array", function(){
        let racer1: GasCar = new GasCar("Team1", 20);
        racer1.accelerate();
        let racer2: GasCar = new GasCar("Team2", 10);
        let racer3: GasCar = new GasCar("Team3", 5);
        racer3.accelerate();
        let racers:Racer[] = [racer1, racer2, racer3];
    expect(findAverageSpeed(racers)).toBeCloseTo(1.333);
    });
    test("average speed of mixed array", function(){
        let racer1: GasCar = new GasCar("Team1", 20);
        racer1.accelerate();
        let racer2: SolarCar = new SolarCar("Team2");
        racer2.accelerate();
        racer2.accelerate();
        let racer3: GasCar = new GasCar("Team3", 5);
        racer3.accelerate();
        let racers:Racer[] = [racer1, racer2, racer3];
    expect(findAverageSpeed(racers)).toBeCloseTo(2);
    });
    test("average speed of mixed array", function(){
        let racer1: GasCar = new GasCar("Team1", 20);
        let racer2: SolarCar = new SolarCar("Team2");
        let racer3: GasCar = new GasCar("Team3", 5);
        let racers:Racer[] = [racer1, racer2, racer3];
    expect(findAverageSpeed(racers)).toBeCloseTo(0);
    });
    test("average speed empty array to equal 0", function(){
        let racers:Racer[] = [];
    expect(findAverageSpeed([])).toEqual(0);
    });
});

describe("Find fastest racer function", function() {
    test("racer A faster", function(){
        let racerA: GasCar = new GasCar("Team1", 20);
        racerA.accelerate();
        let racerB: GasCar = new GasCar("Team2", 10);
    expect(getFasterRacer(racerA, racerB)).toEqual("Team1");
    });
    test("racer B faster", function(){
        let racerA: GasCar = new GasCar("Team1", 20);
        let racerB: GasCar = new GasCar("Team2", 10);
        racerB.accelerate();
    expect(getFasterRacer(racerA, racerB)).toEqual("Team2");
    });
    test("racers at same speed equals null", function(){
        let racerA: GasCar = new GasCar("Team1", 20);
        racerA.accelerate();
        let racerB: GasCar = new GasCar("Team2", 10);
        racerB.accelerate();
    expect(getFasterRacer(racerA, racerB)).toEqual(null);
    });
    test("racer in both types of cars", function(){
        let racerA: SolarCar = new SolarCar("Team1");
        racerA.accelerate();
        racerA.accelerate();
        racerA.accelerate();
        let racerB: GasCar = new GasCar("Team2", 10);
        racerB.accelerate();
    expect(getFasterRacer(racerA, racerB)).toEqual("Team1");
    });


});