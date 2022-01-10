import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { PlayerInfo } from './classes/player-info';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PlayerInfoService } from './services/player-info.service';
import { ScoresService } from './services/scores.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements AfterViewInit {
  showScoreboard: boolean = false;
  scoreboard = new Array<PlayerInfo>();
  loadedExistingGame = false;
  private defaultPlayerCount = 2;
  private defaultRoundCount = 1;
  private numberOfRounds = this.defaultRoundCount;

  @ViewChild(NavbarComponent) navbar: NavbarComponent;

  constructor(private playerInfoService: PlayerInfoService, private scoresService: ScoresService) {
    this.loadExistingGame();
  }

  private loadExistingGame() {
    if (this.scoresService.hasActiveScoreboard()) {
      this.scoreboard = this.scoresService.scoreboard;
      this.showScoreboard = true;
      this.numberOfRounds = this.scoreboard[0].playerScores.length;
      this.loadedExistingGame = true;
    }
  }

  ngAfterViewInit(): void {}

  startOrEndGame(isNewGame: boolean) {
    this.showScoreboard = isNewGame;
    if (isNewGame) {
      this.loadNewScoreboard();
    } else {
      this.playerInfoService.clearPlayerInfo();
      this.scoreboard = new Array<PlayerInfo>();
      this.numberOfRounds = this.defaultRoundCount;
      this.scoresService.clearScoreboard();
    }
  }

  addPlayer() {
    this.addPlayerToScoreboard();
    this.updateScoreboard();
  }

  removePlayer(index: number) {
    this.scoreboard.splice(index, 1);
    this.updateScoreboard();
  }

  updateScoreboard = () => this.scoresService.scoreboard = this.scoreboard;

  newRound = () => {
    this.numberOfRounds++;
    this.scoreboard.forEach(playerInfo => playerInfo.playerScores.insert(playerInfo.playerScores.length, this.addNewPlayerScore()));
    this.updateScoreboard();
  }

  focusToNewRound = () => this.navbar.focusToNewRound();

  private loadNewScoreboard() {
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
