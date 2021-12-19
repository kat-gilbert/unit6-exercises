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

let racer1: GasCar = new GasCar("Team1", 0);
let racer2: GasCar = new GasCar("Team2", 10);
let racer3: GasCar = new GasCar("Team3", 5);

let racers:Racer[] = [racer1, racer2, racer3];

console.log(findRacersWithEmptyFuel(racers));


export function findAverageSpeed(racers: Racer[]):number {


    return 0; //just to hold off error for now
}

export function getFasterRacer(racerA: Racer, racerB: Racer) {

}


