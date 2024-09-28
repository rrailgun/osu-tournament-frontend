import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestsService {

  constructor(private http: HttpClient) {}

  public registerForTournament(): boolean {
    this.http.post('http://localhost:3000/api/tournament/register', {}).subscribe();
    console.log('request')
    return true;
  }
}
