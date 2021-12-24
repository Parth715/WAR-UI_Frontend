import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayComponent } from './play/play.component';
import { PlayerComponent } from './player/player.component';
import { SelectplayerComponent } from './selectplayer/selectplayer.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path: "", redirectTo:"/welcome", pathMatch: "full"},
  {path: "player", component: PlayerComponent},
  {path: "welcome", component: WelcomeComponent},
  {path: "play", component: PlayComponent},
  {path: "selectplayer", component: SelectplayerComponent},
  {path: "**", component: WelcomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
