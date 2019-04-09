import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayersComponent } from './components/players/players.component';
import { ListComponent } from './components/players/list/list.component';
import { AddComponent } from './components/players/add/add.component';
import { StatusComponent } from './components/status/status.component';
import { Game1Component } from './components/status/game1/game1.component';
import { Game2Component } from './components/status/game2/game2.component';
import { Game3Component } from './components/status/game3/game3.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent,
    ListComponent,
    AddComponent,
    StatusComponent,
    Game1Component,
    Game2Component,
    Game3Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
