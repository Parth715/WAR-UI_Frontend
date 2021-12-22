export class Card {
    id: number = 0
    cardnumber: number = 0
    face: string = ""
    photo: string = ""
    constructor(id: number, cardnumber: number, face: string, photo: string){
        this.id = id,
        this.cardnumber = cardnumber,
        this.face = face,
        this.photo = photo
    }
}
