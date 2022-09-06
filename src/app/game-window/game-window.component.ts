import { Component, OnInit} from '@angular/core';
import { Game } from '../interfaces/game';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-game-window',
  templateUrl: './game-window.component.html',
  styleUrls: ['./game-window.component.scss']
})
export class GameWindowComponent implements OnInit {

  game: Game = <Game>{}
  alphabetList: string[] = [];
  isGameOn = false;

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    // To create a list of all the characters to make a keyboard
    for (let i = 0; i <= 25; i++) {
      this.alphabetList.push(String.fromCharCode(97 + i))
    }
  }

  startNewGame(): void {
    // Start a new game
    this.gameService.startNewGame().subscribe({
      next: (data) => {
        this.game = data
        this.isGameOn = true;
      },
      error: (err) => { }
    })
  }

  format_current_pos(): string[] {
    // Split the string into pieces
    if (this.game.current_state === 'InProgress') {
      return this.game.current_pos.split("")
    } else {
      return this.game.answer.split("")
    }
  }

  makeGuess(c: string): void {
    // Make a guess by pressing a keyboard key
    this.gameService.makeGuess(this.game.id, c).subscribe({
      next: (data) => {
        this.game = data
        if (this.game.current_state != 'InProgress') {
          this.isGameOn = false;
        }
      },
      error: (err) => { }
    })
  }

}
