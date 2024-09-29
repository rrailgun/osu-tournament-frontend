import { Component } from '@angular/core';
import { HttpRequestsService } from './services/http-requests.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Player } from './models/Player';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  userInformation: any; //should create a models folder and make User, Team models etc.
  playerList: Player[] = [];

  constructor(private apiRequests: HttpRequestsService,
    private route: ActivatedRoute
  ) {
    apiRequests.getSelf().subscribe(res => {
      this.userInformation = res;
    })
    apiRequests.getPlayers().subscribe( res => {
      this.playerList = res;
      console.log(res)
    })
  }

  loginOsuOauth():void {
    this.apiRequests.loginOsuOauth();
  }
}
