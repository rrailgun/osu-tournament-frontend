import { Component } from '@angular/core';
import { Player } from '../../models/Player';
import { HttpRequestsService } from '../../services/http-requests.service';

@Component({
  selector: 'app-free-agents',
  templateUrl: './free-agents.component.html',
  styleUrl: './free-agents.component.scss'
})
export class FreeAgentsComponent {

    freeAgents: Player[] = [];

    constructor(private apiRequests: HttpRequestsService) {
      apiRequests.getFreeAgents().subscribe( res => {
        this.freeAgents = res;
      })
    }
}
