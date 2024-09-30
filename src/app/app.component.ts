import { Component } from '@angular/core';
import { HttpRequestsService } from './services/http-requests.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Player } from './models/Player';
import { Beatmap } from './models/Beatmap';
import { Observable, of } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  userInformation: any; //should create a models folder and make User, Team models etc.
  beatmapData: any;
  freeAgents: Player[] = [];
  allPlayers: Player[] = [];

  

  constructor(private apiRequests: HttpRequestsService,
    private route: ActivatedRoute
  ) {
    apiRequests.getSelf().subscribe(res => {
      this.userInformation = res;
    })
    apiRequests.getFreeAgents().subscribe( res => {
      this.freeAgents = res;
    })
    apiRequests.getPlayers().subscribe( res => {
      this.allPlayers = res;
    })
    apiRequests.getBeatmapMetadata().subscribe( res => {
      this.beatmapData = res;
    })
  }

  loginOsuOauth():void {
    this.apiRequests.loginOsuOauth();
  }
}
