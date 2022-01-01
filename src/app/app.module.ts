import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ScoreboardComponent } from './components/scoreboard/scoreboard.component';
import { DiceComponent } from './components/dice/dice.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ScoreboardComponent,
    DiceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
