import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from '../player';
import { Card } from './card';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  baseurl = "http://localhost:5085/api/cards"
  constructor(private httpmeth: HttpClient) { }
  GetPlayerCard(): Observable<Card>{
    return this.httpmeth.get(`${this.baseurl}/playernum`) as Observable<Card>
  }
  Draw(id: number): Observable<Card>{
    return this.httpmeth.put(`${this.baseurl}/rand/${id}`, id) as Observable<Card>
  }
  GetBlank(player: Player): Observable<Card>{
    return this.httpmeth.get(`${this.baseurl}/blank`) as Observable<Card>
  }
  GetResult(player: Player, playercard: Card, aicard: Card): Observable<Player>{
    return this.httpmeth.get(`http://localhost:5085/api/players/${player}/${playercard}/${aicard}`) as Observable<Player>
  }
}
