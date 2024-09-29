import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { buildUrl } from 'osu-web.js';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestsService {
  baseUrl: string = 'http://localhost:3000'

  constructor(private http: HttpClient) {}

  public loginOsuOauth(): void {
    window.location.href=buildUrl.authRequest(35056, 'http://localhost:3000/auth/cb', ['identify']);
  }

  public getToken(code: string): void {
    console.log(code)
    this.http.get('/api/auth/cb?code='+code).subscribe(res => console.log(res))
  }

  public registerForTournament(): boolean {
    this.http.post('/api/tournament/register', {}).subscribe();
    return true;
  }

  public getSelf(): Observable<{username: string, id: number}> {
    return this.http.get<{username: string, id: number}>('/api/getSelf');
  }
  
}
