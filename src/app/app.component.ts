import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { PlayerInfo } from './classes/player-info';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PlayerInfoService } from './services/player-info.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements AfterViewInit {
  showScoreboard: boolean = false;
  scoreboard = new Array<PlayerInfo>();
  private defaultPlayerCount = 2;
  private defaultRoundCount = 1;
  private numberOfRounds = this.defaultRoundCount;

  @ViewChild(NavbarComponent) navbar: NavbarComponent;

  constructor(private playerInfoService: PlayerInfoService) { }

  ngAfterViewInit(): void {
      
  }

  startOrEndGame(isNewGame: boolean) {
    this.showScoreboard = isNewGame;
    if (isNewGame) {
      this.loadScoreboard();
    } else {
      this.playerInfoService.clearPlayerInfo();
      this.scoreboard = new Array<PlayerInfo>();
      this.numberOfRounds = this.defaultRoundCount;
    }
  }

  addPlayer() {
    this.addPlayerToScoreboard();
  }

  removePlayer(index: number) {
    this.scoreboard.splice(index, 1);
  }

  newRound = () => {
    this.numberOfRounds++;
    this.scoreboard.forEach(playerInfo => playerInfo.playerScores.insert(playerInfo.playerScores.length, this.addNewPlayerScore()));
  }

  focusToNewRound = () => this.navbar.focusToNewRound();

  private loadScoreboard() {
    for (let i = 0; i < this.defaultPlayerCount; i++) {
      this.addPlayerToScoreboard();
    }
  }

  private addPlayerToScoreboard() {
    const emoji = this.playerInfoService.getRandomEmoji();
    const name = this.playerInfoService.getRandomPLayerName();
    let playerInfo = new PlayerInfo(name, emoji, new FormArray([]));
    for (let i = 0; i < this.numberOfRounds; i++) {
      playerInfo.playerScores.insert(playerInfo.playerScores.length, this.addNewPlayerScore());
    }
    this.scoreboard.push(playerInfo); 
  }

  private addNewPlayerScore() {
    return new FormGroup({
      score: new FormControl("")
    });
  }
}
