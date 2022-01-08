import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { PlayerInfo } from './classes/player-info';
import { PlayerInfoService } from './services/player-info.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  showScoreboard: boolean = false;
  scoreboard = new Array<PlayerInfo>();
  private defaultPlayerCount = 2;
  private numberOfRounds = 1;

  constructor(private playerInfoService: PlayerInfoService) { }

  startOrEndGame(showScoreboard: boolean) {
    this.showScoreboard = showScoreboard;
    if (showScoreboard) {
      this.loadScoreboard();
    } else {
      this.playerInfoService.clearPlayerInfo();
      this.scoreboard = new Array();
    }
  }

  addPlayer() {
    this.addPlayerToScoreboard();
  }

  newRound = () => {
    this.numberOfRounds++;
    this.scoreboard.forEach(playerInfo => playerInfo.playerScores.insert(playerInfo.playerScores.length, this.addNewPlayerScore()));
  }

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
