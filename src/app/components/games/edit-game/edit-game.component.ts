import { Component } from '@angular/core';
import { EVENT_MANAGER_PLUGINS } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Games } from 'src/app/models/game.model';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-edit-game',
  templateUrl: './edit-game.component.html',
  styleUrls: ['./edit-game.component.css']
})
export class EditGameComponent {
  gameDetails: Games = {
    id: '',
    title: '',
    description: '',
    genres: '',
    platforms: '',
    developers: '',
    publisher: '',
    cost: 0
  }

  constructor(private route: ActivatedRoute, private gamesService: GamesService, private router: Router){}

  ngOnInit(): void{
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');

        if(id){
          this.gamesService.getGame(id)
          .subscribe({
            next: (response) => {
              this.gameDetails = response;
            }
          });
        }
      }
    })
  }

  updateGame(){
    this.gamesService.updateGame(this.gameDetails.id, this.gameDetails)
    .subscribe({
      next: (response) =>{
        this.router.navigate(['Games']);
      }
    });

  }
  deleteGame(id: string){
    this.gamesService.deleteGame(id)
    .subscribe({
      next: (response) =>{
        this.router.navigate(['Games']);
      }
    })
  }
}
