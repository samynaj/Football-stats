import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-top-scorers',
  templateUrl: './top-scorers.component.html',
  styleUrls: ['./top-scorers.component.scss']
})
export class TopScorersComponent implements OnInit {

  public topScorers$;

  constructor(private router: Router, private route: ActivatedRoute, private data: DataService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {

      //using the url params to retrieve the leagueId and assign to the variable leagueId
      let leagueId = parseInt(params.get('leagueId'));

      //suscribed to the api call on the topscorers and assign to the property topscorers$
      this.data.getTopScorers(leagueId).subscribe(data => this.topScorers$ = data['scorers'])
    })
  }

}
