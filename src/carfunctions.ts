import { Racer } from "./carracer";


export function findRacersWithEmptyFuel(racers: Racer[]): Racer[] {
    let racersWithEmptyFuel = [];

    for (let racer of racers) {
        if ( racer.isFuelEmpty() === true ) {
            racersWithEmptyFuel.push(racer);
        }
    }
    return racersWithEmptyFuel;
}



export function findAverageSpeed(racers: Racer[]):number {


    return 0; //just to hold off error for now
}

export function getFasterRacer(racerA: Racer, racerB: Racer) {

}


