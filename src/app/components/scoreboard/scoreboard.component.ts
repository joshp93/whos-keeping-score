import { Component, OnInit } from '@angular/core';
import { EmojiService } from 'src/app/services/emoji.service';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.scss']
})
export class ScoreboardComponent implements OnInit {
  rand = "";
  constructor(private emojiService: EmojiService) { }

  ngOnInit(): void {
  }

  random() {
    this.rand = this.emojiService.getRandomEmoji();
  }

}
