import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-fixture',
  templateUrl: './fixture.component.html',
  styleUrls: ['./fixture.component.scss']
})
export class FixtureComponent implements OnInit {

  public fixtures$;

  constructor(private data: DataService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {

      //using the url params to retrieve the leagueId and assign to the variable leagueId
      let leagueId = parseInt(params.get('leagueId'));

      //suscribed to the api call on the fixtures and assign to the property fixtures$
      this.data.getFixtures(leagueId).subscribe(data => this.fixtures$ = data['matches']);
    })
  }

}
