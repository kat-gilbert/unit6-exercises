import { Racer } from "./carracer";

export class SolarCar implements Racer {
    team: string;
    speed: number = 0;

    constructor(team: string) {
        this.team = team;
    }

    accelerate(): void {
        this.speed += 1;
    }

    isFuelEmpty(): boolean {
        return false;
    }
}

let newCar: SolarCar = new SolarCar("Team 1");
console.log(newCar);

export default SolarCar;