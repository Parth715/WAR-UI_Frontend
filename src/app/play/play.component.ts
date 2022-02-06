import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Player } from '../player';
import { PlayerService } from '../player.service';
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
    this.updateplayers();
  }
  updateplayers(): void{
    this.playersrv.GetByPK(1).subscribe({
      next: res => {this.player = res} ,
      error: err => console.log(err)
    })   
    this.playersrv.GetByPK(4).subscribe({
      next: res => {this.AI = res},
      error: err => console.log(err)
    });
  }
  draw(): void{
    this.playersrv.Draw().subscribe({
      next: res => {console.log(res)
                    this.updateplayers();},
      error: err => console.log(err)
    });
  }
}

