import { Component, OnInit } from '@angular/core';
import { Teams } from '../response.model';
import { AppService } from '../app.service';

@Component({
  selector: 'app-game-dashboard',
  templateUrl: './game-dashboard.component.html',
  styleUrls: ['./game-dashboard.component.css']
})

export class GameDashboardComponent implements OnInit {
  title = 'score-tracking-app';
  teams: Teams[] = [];
  selectedTeam = { full_name: '' } as Partial<Teams>;
  gamesCard: any[] = [];

  constructor(private appService: AppService) {}
  
  ngOnInit(): void {
    this.getTeams();
    this.getTeamsGame();
  }

  getTeams() {
    this.appService.getTeams().subscribe((val) => {
      this.teams = val.data;
      if (this.teams.length) { 
        this.selectedTeam = this.teams[0]; 
      }
    })
  }

  saveTeamsGame() {
    sessionStorage.setItem('saved-team-games', JSON.stringify(this.gamesCard));
  }

  getTeamsGame() {
    let games = sessionStorage.getItem('saved-team-games');
    this.gamesCard = games ? JSON.parse(games) : [];
    sessionStorage.removeItem('saved-team-games');
  }

  removeCard(index: number) {
    this.gamesCard.splice(index, 1);
  }

  trackTeam() {
    this.appService.getPast12daysResult(this.selectedTeam.id as number).subscribe((val) => {
      let games = val.data;
      let bucket = {
        my_scores: [],
        opponent_scores: []
      } as any;

      games.forEach(val => {
        if (val.home_team.id === this.selectedTeam.id) {
          bucket.my_scores.push(val.home_team_score),
          bucket.opponent_scores.push(val.visitor_team_score)
        } else {
          bucket.my_scores.push(val.visitor_team_score),
          bucket.opponent_scores.push(val.home_team_score)
        }
      });

      this.gamesCard = [...this.gamesCard, {
        ...this.selectedTeam,
        ...bucket,
        averageScored: (bucket.my_scores.reduce( (p: number, c: number) => p + c, 0 ) / bucket.my_scores.length).toFixed(2),
        averageConceded: (bucket.opponent_scores.reduce( (p: number, c: number) => p + c, 0 ) / bucket.opponent_scores.length).toFixed(2),
        image: `https://interstate21.com/nba-logos/${this.selectedTeam.abbreviation}.png`
      }]
      console.log(this.gamesCard);
    });
  }
}
