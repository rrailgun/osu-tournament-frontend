import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllPlayersComponent } from './all-players/all-players.component';
import { FreeAgentsComponent } from './free-agents/free-agents.component';
import { SharedModule } from '../shared/shared.module';
import { TeamsComponent } from './teams/teams.component';



@NgModule({
  declarations: [
    AllPlayersComponent,
    FreeAgentsComponent,
    TeamsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ComponentsModule { }
