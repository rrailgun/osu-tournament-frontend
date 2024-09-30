import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllPlayersComponent } from './components/all-players/all-players.component';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './shared/misc/page-not-found/page-not-found.component';
import { MappoolListComponent } from './components/mappool-list/mappool-list.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'allPlayers',
    pathMatch: 'full'
  },
  {
    path: 'allPlayers',
    component: AllPlayersComponent
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
