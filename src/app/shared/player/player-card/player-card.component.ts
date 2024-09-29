import { Component, Input } from '@angular/core';
import { Player } from '../../../models/Player';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrl: './player-card.component.scss'
})
export class PlayerCardComponent {
  @Input() playerData: Player | undefined;

  constructor() {
    
  }
  
  openProfile(id:number): void {
    window.open(`https://osu.ppy.sh/u/${id}`, '_blank');
  }

}
