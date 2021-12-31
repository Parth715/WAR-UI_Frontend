export class Player {
    id: number = 0;
    name: string;
    wins: string;
    losses: string;
    outcome: string;
    photo: string;
    constructor(name: string, wins: string, losses: string, outcome: string, photo: string){
        this.name = name;
        this.wins = wins;
        this.losses = losses;
        this.outcome = outcome;
        this.photo = photo;
    }
}
