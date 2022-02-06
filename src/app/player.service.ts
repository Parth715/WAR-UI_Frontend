import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from './player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  baseurl = "http://localhost:5085/api/players";
  constructor(private httpmeth: HttpClient) { }
  GetByPK(id: number): Observable<Player>{
      return this.httpmeth.get(`${this.baseurl}/${id}`) as Observable<Player>
  }
  Draw(): Observable<Player>{
      return this.httpmeth.get(`${this.baseurl}/rand`)as Observable<Player>
  }
  Blank(player: Player): Observable<Player>{
    return this.httpmeth.put(`${this.baseurl}/Blank/${player}`, player) as Observable<Player>
  }
  Blank1(AI: Player): Observable<Player>{
    return this.httpmeth.put(`${this.baseurl}/Blank/${AI}`, AI) as Observable<Player>
  }
}
