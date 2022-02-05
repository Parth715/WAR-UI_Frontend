import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Player } from '../player/player';
import { PlayerService } from '../player/player.service';
import { Card } from './card';
import { CardsService } from './cards.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {

  constructor(private router: Router, private cardsrv: CardsService, private playersrv: PlayerService) { }

  player!: Player;
  AI!: Player;
  
  ngOnInit(): void {
    this.player = this.playersrv.currentplayer
    this.updateplayers();
  }
  updateplayers(): void{
    this.playersrv.GetByPK(this.player.id).subscribe({
      next: res => {this.player = res} ,
      error: err => console.log(err)
    })   
    this.playersrv.GetByPK(2).subscribe({
      next: res => {this.AI = res},
      error: err => console.log(err)
    });
  }
  draw(): void{
    
  }
  check(): void {
    
  }
}

