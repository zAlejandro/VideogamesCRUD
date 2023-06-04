import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Games } from 'src/app/models/game.model';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-add-games',
  templateUrl: './add-games.component.html',
  styleUrls: ['./add-games.component.css']
})
export class AddGamesComponent {

  addGameRequest: Games = {
    id: '',
    title: '',
    description: '',
    genres: '',
    platforms: '',
    developers: '',
    publisher: '',
    cost: 0
  }

  constructor(private gamesService: GamesService, private router: Router){}

  ngOnInit(): void{

  }

  addGame(){
    this.gamesService.addGame(this.addGameRequest)
    .subscribe({
      next: (games) => {
        this.router.navigate(['Games']);
      }
    });
  }
}
