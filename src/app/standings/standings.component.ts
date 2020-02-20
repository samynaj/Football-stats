import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DataService } from '../data.service'

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.scss']
})
export class StandingsComponent implements OnInit {

  public standings$;

  constructor(private router: Router, private route: ActivatedRoute, private data: DataService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {

      //using the url params to retrieve the leagueId and assign to the variable leagueId
      let leagueId = parseInt(params.get('leagueId'));

      //suscribed to the api call on the standings and assign to the property standings$
      this.data.getStandings(leagueId).subscribe(data => this.standings$ = data['standings'][0].table)

    })
  }

}
