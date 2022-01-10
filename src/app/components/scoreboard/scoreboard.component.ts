import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PlayerInfo } from 'src/app/classes/player-info';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.scss']
})
export class ScoreboardComponent implements OnInit {
  @Input() scoreboard = new Array<PlayerInfo>();
  @Output() removePlayerEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  totalScore = (playerInfo: PlayerInfo) => {
    return playerInfo.playerScores.value.reduce((prevValue, value) => {
      return (parseInt(prevValue) | 0) + (parseInt(value.score) | 0);
    }, 0);
  }

  removePlayer(index: number) {
    this.removePlayerEvent.emit(index);
  }
}
