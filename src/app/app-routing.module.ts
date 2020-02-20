import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FixtureComponent } from './fixture/fixture.component';
import { StandingsComponent } from './standings/standings.component';
import { TopScorersComponent } from './top-scorers/top-scorers.component';
import { SwitchbarComponent } from './switchbar/switchbar.component'


let selectedLeagueId = 2001;

const routes: Routes = [
  {
    path: '',
    redirectTo: `/league/${selectedLeagueId}`,
    pathMatch: 'full'
  },
  {
    path: 'league',
    component: SwitchbarComponent
  },
  {
    path: 'league/:leagueId',
    component: SwitchbarComponent,
    children: [
      {
        path: 'fixtures/:leagueId',
        component: FixtureComponent
      },
      {
        path: 'table/:leagueId',
        component: StandingsComponent
      },
      {
        path: 'scorers/:leagueId',
        component: TopScorersComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
