import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from '../interfaces/game';


@Injectable({
  providedIn: 'root'
})
export class GameService  {

  base_url = 'http://localhost:8000/'
  constructor(private http: HttpClient) { }

  

  startNewGame(): Observable<Game> {
    return this.http.get<Game>(this.base_url + `game/new`)
  }

  makeGuess(game_id: number, guess: string): Observable<Game>{
    return this.http.post<Game>(this.base_url+ `game/${game_id}/guess/`, {guess: guess.toLowerCase()})
  }
}
