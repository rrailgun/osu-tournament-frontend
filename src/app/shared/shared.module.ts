import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { PlayerCardComponent } from './player/player-card/player-card.component';
import { MatCardModule } from '@angular/material/card';
import { ListPlayersComponent } from './player/list-players/list-players.component';
import { PageNotFoundComponent } from './misc/page-not-found/page-not-found.component'

@NgModule({
  declarations: [
  
    PlayerCardComponent,
    ListPlayersComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ],
  providers: [provideAnimationsAsync()],
  exports:[
    PlayerCardComponent,
    ListPlayersComponent
  ]
})
export class SharedModule { }
