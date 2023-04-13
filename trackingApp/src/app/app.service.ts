import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GamesResponse, TeamsResponse } from './response.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getTeams() {
    return this.http.get<TeamsResponse>('https://free-nba.p.rapidapi.com/teams');
  }

  getPastDays(number = 12) {
    let dates = [];
    for (let i = 1; i <= Math.abs(number); i++) {
      dates.push( this.formatDate(new Date(new Date().getTime() - (number >= 0 ? i : i - i - i) * 24 * 60 * 60 * 1000)) )
    }
    return dates;
  }

  formatDate(date: Date) {
    let d = date;
    let day = '' + d.getDate();
    let month = '' + (d.getMonth() + 1);
    let year = d.getFullYear();

    if (month.length < 2) {
      month = '0' + month;
    }

    if (day.length < 2) { 
      day = '0' + day;
    }
    return [year, month, day].join('-');
  }

  getPast12daysResult(id: number) {
    let dateQuery = this.getPastDays().join('&dates[]=');
    return this.http.get<GamesResponse>(`https://free-nba.p.rapidapi.com/games?page=0&per_page=12&team_ids[]=${id}&dates[]=${dateQuery}`);
  }

}
