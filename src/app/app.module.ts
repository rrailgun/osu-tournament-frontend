import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SharedModule } from './shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { provideRouter, RouterOutlet } from '@angular/router';
import { routes } from './app-routing.module'
import { MatListModule } from '@angular/material/list';
import { ComponentsModule } from './components/components.module';
import { MatExpansionModule } from '@angular/material/expansion';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ComponentsModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    MatSidenavModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatListModule,
    RouterOutlet,
    MatExpansionModule
  ],
  providers: [provideHttpClient(), provideAnimationsAsync(), provideRouter(routes)],
  bootstrap: [AppComponent]
})
export class AppModule { }
