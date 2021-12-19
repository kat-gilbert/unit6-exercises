import { Racer } from "./carracer";

export class GasCar implements Racer {
    team: string;
    speed: number = 0;
    fuel: number;

    constructor(team: string, fuel: number=10) {
        this.team = team;
        this.fuel = fuel;
    }

    accelerate(): void {
        this.speed += 2;
        this.fuel -= 1;
    }

    isFuelEmpty(): boolean {

        if (this.fuel <= 0) {
            return true;
        }
        else;
        return false;
    }
}

let newCar: GasCar = new GasCar("Team 2", 20);
console.log(newCar);

export default GasCar;