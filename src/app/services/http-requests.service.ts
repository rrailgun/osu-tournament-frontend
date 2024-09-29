import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { buildUrl } from 'osu-web.js';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Player } from '../models/Player';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestsService {
  baseUrl: string = 'http://localhost:3000'

  constructor(private http: HttpClient) {}

  public loginOsuOauth(): void {
    window.location.href=buildUrl.authRequest(35056, 'http://localhost:3000/auth/cb', ['identify','public']);
  }

  public registerForTournament(): boolean {
    this.http.post('/api/tournament/register', {}).subscribe();
    return true;
  }

  public getSelf(): Observable<Player> {
    return this.http.get<Player>('/api/getSelf');
  }

  public getPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>('/api/players');
  }

  public getFreeAgents(): Observable<Player[]> {
    return this.http.get<Player[]>('/api/free-agents');
  }
  
}
