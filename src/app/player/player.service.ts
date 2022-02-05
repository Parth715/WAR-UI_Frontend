import { HttpClient } from '@angular/common/http';
import { Injectable, ɵPlayer } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from './player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  currentplayer!: Player;
  baseurl = "http://localhost:5085/api/players";
  constructor(private httpmeth: HttpClient) { }
  Getall(): Observable<Player[]>{
    return this.httpmeth.get(this.baseurl) as Observable<Player[]>
  }
  GetByPK(id: number): Observable<Player>{
    return this.httpmeth.get(`${this.baseurl}/${id}`) as Observable<Player>
  }
}
