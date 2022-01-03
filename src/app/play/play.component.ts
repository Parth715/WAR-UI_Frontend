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

  playercard!: Card;
  AIcard!: Card;
  player!: Player;
  
  ngOnInit(): void {
    this.player = this.playersrv.currentplayer
    this.cardsrv.GetBlank(this.player).subscribe({
      next: res => {this.AIcard = res
                    this.playercard = res} ,
      error: err => console.log(err)
    })   
  }
  AICARD(): void {
    this.cardsrv.GetAICard(this.player.id).subscribe({
      next: res => {this.AIcard = res
                    this.check()},
      error: err => console.log(err)
    });
  }
  PLAYERCARD(): void {
    this.cardsrv.GetPlayerCard().subscribe({
      next: res => {this.playercard = res},
      error: err => console.log(err)
    });
  }
  draw(): void {
    this.PLAYERCARD();
    this.AICARD();
  }
  check(): void {
    this.cardsrv.GetResult(this.player, this.playercard, this.AIcard).subscribe({
      next: res => this.player = res,
      error: err => console.log(err)
    })
  }
}

