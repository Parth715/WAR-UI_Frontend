export class Card {
    id: number = 0
    cardnumber: number = 0
    face: string = ""
    constructor(id: number, cardnumber: number, face: string){
        this.id = id,
        this.cardnumber = cardnumber,
        this.face = face
    }
}
