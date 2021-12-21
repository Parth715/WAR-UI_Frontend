import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Card } from './card';
import { CardsService } from './cards.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {

  constructor(private router: Router, private cardsrv: CardsService) { }

  playercard!: Card;
  AIcard!: Card;
  
  ngOnInit(): void {
    this.refresh();
  }
  refresh(): void {
    this.cardsrv.GetBlank().subscribe({
      next: res => {
        this.playercard = res;
        this.AIcard = res;
      },
      error: err => console.log(err)
    })
  }
}
