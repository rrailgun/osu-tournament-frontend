import { Component } from '@angular/core';
import { HttpRequestsService } from '../../services/http-requests.service';
import { Player } from '../../models/Player';

@Component({
  selector: 'app-all-players',
  templateUrl: './all-players.component.html',
  styleUrl: './all-players.component.scss'
})
export class AllPlayersComponent {

  allPlayers: Player[] = [];

  constructor(private apiRequests: HttpRequestsService) {
    apiRequests.getPlayers().subscribe( res => {
      this.allPlayers = res;
    })
  }

}
