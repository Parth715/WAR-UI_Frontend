export class Player {
    id: number = 0;
    name: string;
    wins: string;
    losses: string;
    outcome: string;
    constructor(name: string, wins: string, losses: string, outcome: string){
        this.name = name;
        this.wins = wins;
        this.losses = losses;
        this.outcome = outcome;
    }
}
