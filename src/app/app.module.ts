import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SharedModule } from './shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';

import { AllPlayersComponent } from './components/all-players/all-players.component' 
import { provideRouter, RouterOutlet } from '@angular/router';
import { routes } from './app-routing.module';
import { MappoolListComponent } from './components/mappool-list/mappool-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AllPlayersComponent,
    MappoolListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    MatSidenavModule,
    MatButtonModule,
    RouterOutlet
  ],
  providers: [provideHttpClient(), provideAnimationsAsync(), provideRouter(routes)],
  bootstrap: [AppComponent]
})
export class AppModule { }
