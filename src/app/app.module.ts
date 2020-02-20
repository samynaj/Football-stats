import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FixtureComponent } from './fixture/fixture.component';
import { HeaderComponent } from './header/header.component';
import { SwitchbarComponent } from './switchbar/switchbar.component';
import { StandingsComponent } from './standings/standings.component';
import { TopScorersComponent } from './top-scorers/top-scorers.component';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    FixtureComponent,
    HeaderComponent,
    SwitchbarComponent,
    StandingsComponent,
    TopScorersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
