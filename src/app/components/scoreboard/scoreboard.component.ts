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
  @Output() focusToNewRoundEvent = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  getTabIndex = (s: number, i: number): number => 100 + s + (i * 10);

  totalScore = (playerInfo: PlayerInfo) => {
    return playerInfo.playerScores.value.reduce((prevValue, value) => {
      return (parseInt(prevValue) | 0) + (parseInt(value.score) | 0);
    }, 0);
  }

  removePlayer(index: number) {
    this.removePlayerEvent.emit(index);
  }

  moveNext(s: number, i: number) {
    if (this.scoreboard[s + 1]) {
      document.getElementById("score" + this.getTabIndex(s + 1, i)).focus();
    } else if (this.scoreboard[0].playerScores.controls[i + 1]) {
      document.getElementById("score" + this.getTabIndex(0, i + 1)).focus();
    } else {
      this.focusToNewRoundEvent.emit();
    }
  }
}
