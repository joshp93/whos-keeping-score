import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmojiService {
  private unicodeEmojis: Array<string> = [
    "U+1F973",
    "U+1F974",
    "U+1F635",
    "U+1F913",
    "U+1F608",
    "U+1F4A9",
    "U+1F479",
    "U+1F47B",
    "U+1F47D",
    "U+1F47E",
    "U+1F916",
    "U+1F63C",
    "U+1F9B9",
    "U+1F9D9",
    "U+1F9DA",
    "U+1F9DB",
    "U+1F9DD",
    "U+1F9DF",
    "U+1F939",
    "U+1F984"
  ];
  constructor() { }

  getRandomEmojiUnicode() {
    return this.unicodeEmojis[Math.floor(Math.random()*this.unicodeEmojis.length - 1)];
  }
}
