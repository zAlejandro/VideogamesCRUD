import { Component } from '@angular/core';
import { Games } from 'src/app/models/game.model';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css']
})
export class GamesListComponent {
  
  games: Games[] = [];

  constructor(private gamesService: GamesService){}

  ngOnInit(): void{
    this.gamesService.getAllGames()
    .subscribe({
      next: (games) => {
        this.games = games;
      },
      error: (response) =>{
        console.log(response)
      }
    })
  }

}
