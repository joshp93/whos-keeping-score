import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  
  showScoreboard: boolean = false;

  startOrEndGame(showScoreboard: boolean) {
    this.showScoreboard = showScoreboard;
  }

}
