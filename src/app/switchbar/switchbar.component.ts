import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-switchbar',
  templateUrl: './switchbar.component.html',
  styleUrls: ['./switchbar.component.scss']
})
export class SwitchbarComponent implements OnInit {
  
  //this will be used to hold state
  public selectedFixtures = false;
  public selectedStandings = false;
  public selectedTopScorers = false;

  public leagueId = 2001;
  
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.paramMap.subscribe((params: ParamMap) => {

      //using the url params to retrieve the leagueId and assign to the property leagueId
      this.leagueId = parseInt(params.get('leagueId'));

      //invoked the displayFixtures method so its called when app loads
      this.displayFixtures(this.leagueId);
    })
  }

  //to resect the active state(classes)
  resetSwitch() {
    this.selectedFixtures = false;
    this.selectedStandings = false;
    this.selectedTopScorers = false;
  }

  displayFixtures(leagueId) {

    this.resetSwitch();
    this.selectedFixtures = true;

    //navigate to fixtures based on current route
    this.router.navigate([`fixtures/${leagueId}`], {relativeTo: this.route})
  }

  displayStandings(leagueId) {

    this.resetSwitch();
    this.selectedStandings = true;

    //navigate to standing(table) based on current route
    this.router.navigate([`table/${leagueId}`], {relativeTo: this.route})
  }

  displayTopScorers(leagueId) {

    this.resetSwitch();
    this.selectedTopScorers = true;

    //navigate to topscorers based on current route
    this.router.navigate([`scorers/${leagueId}`], {relativeTo: this.route})
  }

}
