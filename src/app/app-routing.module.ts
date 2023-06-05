import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesListComponent } from './components/games/games-list/games-list.component';
import { AddGamesComponent } from './components/games/add-games/add-games.component';
import { EditGameComponent } from './components/games/edit-game/edit-game.component';
import { HomeComponent } from './components/games/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'Games',
    component: GamesListComponent
  },
  {
    path: 'Games/add',
    component: AddGamesComponent
  },
  {
    path: 'Games/edit/:id',
    component: EditGameComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
