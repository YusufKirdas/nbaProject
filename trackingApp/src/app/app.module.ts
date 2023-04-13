import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameDashboardComponent } from './game-dashboard/game-dashboard.component';
import { GamesResultPageComponent } from './games-result-page/games-result-page.component';

@NgModule({
  declarations: [
    AppComponent,
    GameDashboardComponent,
    GamesResultPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
