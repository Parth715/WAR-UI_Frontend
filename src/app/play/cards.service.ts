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
  Draw(id: number): Observable<Card>{
    return this.httpmeth.put(`${this.baseurl}/rand/${id}`, id) as Observable<Card>
  }
  
}
