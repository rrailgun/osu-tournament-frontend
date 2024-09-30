import { Component } from '@angular/core';
import { HttpRequestsService } from './services/http-requests.service';
import { Router } from '@angular/router';
import { Player } from './models/Player';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  userInformation: Player | undefined;
  loading: boolean = true;
  links = [
    {
        label: 'View All Players',
        route: '/players/all-players'
    },
    {
        label: 'View Free Agents',
        route: '/players/free-agents'
    },
    {
        label: 'Example Broken Link',
        route: '/adskljf'
    }
  ]

  constructor(private apiRequests: HttpRequestsService,
    private router: Router
  ) {
    apiRequests.getSelf().subscribe(
        res => {
            this.userInformation = res
            this.loading=false;
        },
        err => {
            this.userInformation = undefined
            this.loading=false;
        }
    )
  }

  loginOsuOauth():void {
    this.apiRequests.loginOsuOauth();
  }

  navigate(destination: string) {
    this.router.navigateByUrl(destination)
  }
}
