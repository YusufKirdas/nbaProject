import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';
import { Teams } from '../response.model';

@Component({
  selector: 'app-games-result-page',
  templateUrl: './games-result-page.component.html',
  styleUrls: ['./games-result-page.component.css']
})
export class GamesResultPageComponent implements OnInit{

  gameCard: any[] = [];
  selectedTeam!: Teams;
  constructor(private route: ActivatedRoute, private appService: AppService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['teamsCode'];
    this.trackTeam(id);
  }

  trackTeam(id: number) {
    this.appService.getPast12daysResult(id as number).subscribe((val) => {
      this.gameCard = val.data;
      this.selectedTeam = this.gameCard[0].home_team.id == id ? this.gameCard[0].home_team : this.gameCard[0].visitor_team;
    });
  }

}
