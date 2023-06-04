import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Games } from '../models/game.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getAllGames(): Observable<Games[]>{
    return this.http.get<Games[]>(this.baseApiUrl + '/api/Games')
  }
  addGame(addGameRequest: Games): Observable<Games>{
    addGameRequest.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<Games>(this.baseApiUrl + '/api/Games'
    ,addGameRequest);
  }
  getGame(id: string): Observable<Games>{
    return this.http.get<Games>(this.baseApiUrl + '/api/Games/' + id)
  }
  updateGame(id: string, updateGameRequest: Games):Observable<Games>{
    return this.http.put<Games>(this.baseApiUrl + '/api/Games/' + id, updateGameRequest);
  }
  deleteGame(id: string): Observable<Games>{
    return this.http.delete<Games>(this.baseApiUrl + '/api/Games/' + id);
  }
}
