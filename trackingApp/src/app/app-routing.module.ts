import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameDashboardComponent } from './game-dashboard/game-dashboard.component';
import { GamesResultPageComponent } from './games-result-page/games-result-page.component';

const routes: Routes = [
  {
    path: '',
    component: GameDashboardComponent,
  },
  {
    path: 'results/:teamsCode',
    component: GamesResultPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
