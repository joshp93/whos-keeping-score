import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PlayerInfoService } from 'src/app/services/player-info.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Output() gameEvent: EventEmitter<boolean> = new EventEmitter();
  @Output() playerEvent: EventEmitter<void> = new EventEmitter();
  @Output() newRoundEvent: EventEmitter<void> = new EventEmitter();
  gameRunning: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  newGame() {
    this.gameEvent.emit(true);
    this.gameRunning = true;
  }

  endGame() {
    this.gameEvent.emit(false);
    this.gameRunning = false;
  }

  addPlayer = () => this.playerEvent.emit();

  newRound = () => this.newRoundEvent.emit();

  focusToNewRound = () => document.getElementById('newRound').focus();
}
