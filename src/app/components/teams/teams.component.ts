import { Component } from '@angular/core';
import { HttpRequestsService } from '../../services/http-requests.service';
import { Team } from '../../models/Team';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.scss'
})
export class TeamsComponent {

    data$: Observable<Team[]>;
    constructor(private httpRequestsService: HttpRequestsService) {
        this.data$ = httpRequestsService.getTeams();
    }

}
