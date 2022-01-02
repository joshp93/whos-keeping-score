import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmojiService {
  private emojis: Array<string> = new Array();
  private usedEmojis: Array<string> = new Array();

  constructor() {
    this.instantiateEmojis();
  }

  getRandomEmoji() {
    const emoji = this.emojis.filter(emoji => !this.usedEmojis.includes(emoji))[Math.floor(Math.random() * this.emojis.length - 1)];
    this.usedEmojis.push(emoji);
    return emoji;
  }

  clearEmojis() {
    this.instantiateEmojis();
    this.usedEmojis = new Array();
  }

  instantiateEmojis() {
    this.emojis = [
      "😎",
      "🧛",
      "🧙‍♂️",
      "😼",
      "👻",
      "👽",
      "👾",
      "👹",
      "🤖",
      "🤓",
      "💩",
      "🤡",
      "😈",
      "🦹",
      "🥸",
      "🤑"
    ];
  }
}
