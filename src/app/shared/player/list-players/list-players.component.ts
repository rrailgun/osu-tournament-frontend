import { Component, Input } from '@angular/core';
import { Player } from '../../../models/Player';

@Component({
  selector: 'app-list-players',
  templateUrl: './list-players.component.html',
  styleUrl: './list-players.component.scss'
})
export class ListPlayersComponent {
  @Input() playerList: Player[] = [];
  @Input() heading: string | undefined;
}
