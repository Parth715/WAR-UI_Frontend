import { Card } from "../play/card";

export class Player {
    id: number = 0;
    name: string = "";
    outcome: string = "";
    card!: Card;
}
