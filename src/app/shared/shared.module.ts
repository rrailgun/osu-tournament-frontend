import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { PlayerCardComponent } from './player/player-card/player-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion'
import { ListPlayersComponent } from './player/list-players/list-players.component';
import { PageNotFoundComponent } from './misc/page-not-found/page-not-found.component';
import { BeatmapsComponent } from './mappool/beatmaps/beatmaps.component'

@NgModule({
  declarations: [
  
    PlayerCardComponent,
    ListPlayersComponent,
    PageNotFoundComponent,
    BeatmapsComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatExpansionModule
  ],
  providers: [provideAnimationsAsync()],
  exports:[
    PlayerCardComponent,
    ListPlayersComponent,
    BeatmapsComponent
  ]
})
export class SharedModule { }
