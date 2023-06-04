import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GamesListComponent } from './components/games/games-list/games-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AddGamesComponent } from './components/games/add-games/add-games.component';
import {FormsModule} from '@angular/forms';
import { EditGameComponent } from './components/games/edit-game/edit-game.component'

@NgModule({
  declarations: [
    AppComponent,
    GamesListComponent,
    AddGamesComponent,
    EditGameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
