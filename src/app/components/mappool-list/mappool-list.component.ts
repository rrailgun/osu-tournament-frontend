import { Component } from '@angular/core';
import { HttpRequestsService } from '../../services/http-requests.service';
import { Beatmap } from '../../models/Beatmap';

@Component({
  selector: 'app-mappool-list',
  templateUrl: './mappool-list.component.html',
  styleUrl: './mappool-list.component.scss'
})
export class MappoolListComponent {
  
  mappool: Beatmap = {};
  
  constructor(private apiRequests: HttpRequestsService) {
    apiRequests.getBeatmapMetadata().subscribe( res => {
      this.mappool = res;
    })
  }

}
