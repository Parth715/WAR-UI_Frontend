import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Player } from '../player/player';
import { PlayerService } from '../player/player.service';

@Component({
  selector: 'app-selectplayer',
  templateUrl: './selectplayer.component.html',
  styleUrls: ['./selectplayer.component.css']
})
export class SelectplayerComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private playersrv: PlayerService) { }

  player!: Player;
  ngOnInit(): void {
    let id = this.route.snapshot.params["id"];
    this.playersrv.GetByPK(id).subscribe({
      next: res => {
        this.player = res
      },
      error: err => console.log(err)
    })
  }
  play(): void{
    this.playersrv.currentplayer = this.player;
    this.router.navigate(["/play"])
  }

}
