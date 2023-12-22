import { Injectable } from '@angular/core';
import { UntypedFormControl, UntypedFormArray, UntypedFormGroup } from '@angular/forms';
import { PlayerInfo } from '../classes/player-info';
import { PlayerInfoSession } from '../classes/player-info-session';

@Injectable({
  providedIn: 'root'
})
export class ScoresService {

  constructor() { }

  get scoreboard(): Array<PlayerInfo> {
    const playerInfoSession = JSON.parse(sessionStorage.getItem('scoreboard')) as Array<PlayerInfoSession>;
    if (!playerInfoSession) {
      return null;
    }
    return playerInfoSession.map(playerScores => new PlayerInfo(playerScores.name, playerScores.emoji,
      new UntypedFormArray(playerScores.scores.map(score => {
        return new UntypedFormGroup({
          score: new UntypedFormControl(score.toString())
        });
      }))));
  }

  set scoreboard(scoreboard: Array<PlayerInfo>) {
    sessionStorage.setItem('scoreboard', JSON.stringify(scoreboard.map(playerInfo => new PlayerInfoSession(playerInfo))));
  }

  hasActiveScoreboard = (): boolean => this.scoreboard && this.scoreboard.length > 0;

  clearScoreboard = (): void => sessionStorage.clear();
}
