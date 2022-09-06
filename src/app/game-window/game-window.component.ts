import { AfterViewInit, Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { Input } from '@angular/core';
import { Game } from '../interfaces/game';
import { GameService } from '../services/game.service';

@Pipe({
  name: 'split'
})
export class SplitPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.split('');
  }
}

@Component({
  selector: 'app-game-window',
  templateUrl: './game-window.component.html',
  styleUrls: ['./game-window.component.scss']
})
export class GameWindowComponent implements OnInit, AfterViewInit {

  game: Game = <Game>{}
  alphabetList: string[] = [];
  isGameOn = false;

  constructor(private gameService: GameService) { }

  ngOnInit(): void {

   

  }

  ngAfterViewInit(): void {
    for (let i = 0; i <= 25; i++) {
      this.alphabetList.push(String.fromCharCode(97 + i))
    }
  }
  startNewGame(): void {
    this.gameService.startNewGame().subscribe({
      next: (data) => {
        this.game = data
        this.isGameOn = true;
      },
      error: (err) => { }
    })
  }

  format_current_pos(): string[] {
    if (this.game.current_state === 'InProgress'){
      return this.game.current_pos.split("")
    } else {
      return this.game.answer.split("")
    }
  }

  makeGuess(c: string): void {
    console.log(c);
    this.gameService.makeGuess(this.game.id, c).subscribe({
      next: (data) => {
        this.game = data
        if (this.game.current_state != 'InProgress'){
          this.isGameOn = false;
        }
      },
      error: (err) => { }
    })
  }

}
