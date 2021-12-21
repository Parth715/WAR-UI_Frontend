import { Component, OnInit } from '@angular/core';
import { Player } from './player';
import { PlayerService } from './player.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  players: Player[] = [];
  constructor(private playersrv: PlayerService) { }

  ngOnInit(): void {
    this.playersrv.Getall().subscribe({
      next: res => this.players = res,
      error: err => console.log(err)
    })
  }

}
