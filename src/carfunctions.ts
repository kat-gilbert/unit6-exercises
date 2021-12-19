import { Racer } from "./carracer";
import { GasCar } from "./cargas";

export function findRacersWithEmptyFuel(racers: Racer[]): Racer[] {
    let racersWithEmptyFuel = [];

    for (let racer of racers) {
        if ( racer.isFuelEmpty() === true ) {
            racersWithEmptyFuel.push(racer);
        }
    }
    return racersWithEmptyFuel;
}

// let racer1: GasCar = new GasCar("Team1", 0);
// let racer2: GasCar = new GasCar("Team2", 10);
// let racer3: GasCar = new GasCar("Team3", 5);
// let racers:Racer[] = [racer1, racer2, racer3];
// console.log(findRacersWithEmptyFuel(racers));


export function findAverageSpeed(racers: Racer[]):number {

    let averageSpeed:number = 0;
    if (racers.length === 0) {
        return 0;
    }

        for (let racer of racers) {
        averageSpeed += racer.speed;
        }
        return averageSpeed / racers.length;       
}

let racer1: GasCar = new GasCar("Team1", 20);
racer1.accelerate();
let racer2: GasCar = new GasCar("Team2", 10);
racer2.accelerate();
let racer3: GasCar = new GasCar("Team3", 5);
racer3.accelerate();
let racers:Racer[] = [racer1, racer2, racer3];
console.log(findAverageSpeed(racers));


export function getFasterRacer(racerA: Racer, racerB: Racer):any {

    if (racerA.speed > racerB.speed ) {
        return racerA.team;
    }
    else if (racerA.speed < racerB.speed) {
        return racerB.team;
    }
    else {
        return null;
    }
}


