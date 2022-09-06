import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Game } from '../interfaces/game';


@Injectable({
  providedIn: 'root'
})
export class GameService  {

  base_url: string = environment.baseApiURL;
  
  constructor(private http: HttpClient) { }

  startNewGame(): Observable<Game> {
    return this.http.get<Game>(this.base_url + `game/new/`)
  }

  makeGuess(game_id: number, guess: string): Observable<Game>{
    return this.http.post<Game>(this.base_url+ `game/${game_id}/guess/`, {guess: guess.toLowerCase()})
  }
}
