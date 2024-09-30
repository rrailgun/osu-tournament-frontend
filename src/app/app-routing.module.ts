import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllPlayersComponent } from './components/all-players/all-players.component';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './shared/misc/page-not-found/page-not-found.component';
import { MappoolListComponent } from './components/mappool-list/mappool-list.component';
import { FreeAgentsComponent } from './components/free-agents/free-agents.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'players/all-players',
    pathMatch: 'full'
  },
  {
    path: 'players',
    children: [
      {
        path: 'all-players',
        component: AllPlayersComponent
      },
      {
        path: 'free-agents',
        component: FreeAgentsComponent
      }
    ]
  },
  {
    path: 'mappools',
    component: MappoolListComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
