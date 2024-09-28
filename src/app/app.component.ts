import { Component } from '@angular/core';
import { HttpRequestsService } from './services/http-requests.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'osu-tournament-frontend';

  constructor(private apiRequests: HttpRequestsService) {
    apiRequests.registerForTournament();
  }
}
