import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Game } from '../interfaces/game';
import { GameService } from '../services/game.service';


@Component({
  selector: 'app-game-window',
  templateUrl: './game-window.component.html',
  styleUrls: ['./game-window.component.scss']
})
export class GameWindowComponent implements OnInit {

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
  }
  startNewGame(): void{
    this.gameService.startNewGame().subscribe({
      next: (data)=>{},
      error: (err) =>{}
    })
  }

}
