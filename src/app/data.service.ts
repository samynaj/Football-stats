import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private API_KEY = "677a48d15552486fb688b4dd49160b5c";

  constructor(private http: HttpClient) { }

  //api request for fixtures
  getFixtures(leagueId) {
    return this.http.get(`http://api.football-data.org/v2/competitions/${leagueId}/matches?status=SCHEDULED`,
    { headers: { 'X-Auth-Token': this.API_KEY }})
  }

  //api request for standings
  getStandings(leagueId) {
    return this.http.get(`http://api.football-data.org/v2/competitions/${leagueId}/standings?standingType=TOTAL`,
    {headers: { 'X-Auth-Token': this.API_KEY }})
  }

  //api request for scorers
  getTopScorers(leagueId) {
    return this.http.get(`http://api.football-data.org/v2/competitions/${leagueId}/scorers`,
    { headers: { 'X-Auth-Token': this.API_KEY }})
  }
}
