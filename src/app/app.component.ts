import { Component } from '@angular/core';
import { HttpRequestsService } from './services/http-requests.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  userInformation: any; //should create a models folder and make User, Team models etc.

  constructor(private apiRequests: HttpRequestsService,
    private route: ActivatedRoute
  ) {
    apiRequests.getSelf().subscribe(res => {
      this.userInformation = res;
    })
  }

  loginOsuOauth():void {
    this.apiRequests.loginOsuOauth();
  }
}
