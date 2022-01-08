import { Component, Input, OnInit } from '@angular/core';
import { PlayerInfo } from 'src/app/classes/player-info';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.scss']
})
export class ScoreboardComponent implements OnInit {
  @Input() scoreboard = new Array<PlayerInfo>();

  constructor() { }

  totalScore = (playerInfo: PlayerInfo) => {
    return playerInfo.playerScores.value.reduce((prevValue, value) => {
      return (parseInt(prevValue) | 0) + (parseInt(value.score) | 0);
    }, 0);
  }

  ngOnInit(): void {
  }
}
