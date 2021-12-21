import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from '../player/player';
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
  GetAICard(playernum: string, player: Player): Observable<Card>{
    return this.httpmeth.get(`${this.baseurl}/rand/${playernum}/${player}`) as Observable<Card>
  }
  GetBlank(): Observable<Card>{
    return this.httpmeth.get(`${this.baseurl}/blank`) as Observable<Card>
  }
}
