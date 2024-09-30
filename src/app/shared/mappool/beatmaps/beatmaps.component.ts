import { Component, Input } from '@angular/core';
import { Beatmap } from '../../../models/Beatmap';

@Component({
  selector: 'app-beatmaps',
  templateUrl: './beatmaps.component.html',
  styleUrl: './beatmaps.component.scss'
})
export class BeatmapsComponent {
  @Input() beatmapData: Beatmap | undefined;

  constructor() {

  }

  openProfile(mapper_id:number): void {
    window.open(`https://osu.ppy.sh/u/${mapper_id}`, '_blank');
  }
  openBeatmap(cover:number, beatmap_id:number): void {
    window.open(`https://osu.ppy.sh/beatmapsets/${cover}#osu/${beatmap_id}`, '_blank');
  }
}
