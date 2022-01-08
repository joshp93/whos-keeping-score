import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerInfoService {
  private emojis: Array<string> = new Array();
  private usedEmojis: Array<string> = new Array();
  private adjectives: Array<string> = new Array();
  private usedAdjectives: Array<string> = new Array();
  private nouns: Array<string> = new Array();
  private usedNouns: Array<string> = new Array();

  constructor() {
    this.loadData();
  }

  getRandomEmoji = () => this.getRandomElementFromArray(this.emojis, this.usedEmojis);

  getRandomPLayerName = () => `${this.getRandomElementFromArray(this.adjectives, this.usedAdjectives)} ${this.getRandomElementFromArray(this.nouns, this.usedNouns)}`;

  clearPlayerInfo() {
    this.loadData();
    this.resetUsedArrays();
  }

  private loadData() {
    this.loadEmojis();
    this.loadAdjectives();
    this.loadNouns();
  }

  private getRandomElementFromArray(array: Array<string>, usedArray: Array<string>): string {
    const filteredArray = array.filter(element => !usedArray.includes(element));
    const index = Math.floor(Math.random() * filteredArray.length);
    const element = filteredArray[index];
    if (!element) {
      console.error("The element was underfined at index " + index, filteredArray);
      return element;
    }
    usedArray.push(element);
    return element;
  }

  private loadEmojis = () => this.emojis = [
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

  private loadAdjectives = () => this.adjectives = [
    "Adorable",
    "Adventurous",
    "Aggressive",
    "Agreeable",
    "Alert",
    "Alive",
    "Amused",
    "Angry",
    "Annoyed",
    "Annoying",
    "Anxious",
    "Average",
    "Bad",
    "Better",
    "Bewildered",
    "Blushing",
    "Bored",
    "Brainy",
    "Brave",
    "Breakable",
    "Bright",
    "Busy",
    "Calm",
    "Careful",
    "Cautious",
    "Charming",
    "Cheerful",
    "Clean",
    "Clear",
    "Clever",
    "Cloudy",
    "Clumsy",
    "Colorful",
    "Combative",
    "Comfortable",
    "Concerned",
    "Condemned",
    "Confused",
    "Cooperative",
    "Courageous",
    "Crazy",
    "Creepy",
    "Cruel",
    "Curious",
    "Cute",
    "Dangerous",
    "Dark",
    "Dead",
    "Defeated",
    "Defiant",
    "Delightful",
    "Determined",
    "Different",
    "Difficult",
    "Distinct",
    "Disturbed",
    "Dizzy",
    "Doubtful",
    "Drab",
    "Dull",
    "Eager",
    "Easy",
    "Elated",
    "Elegant",
    "Embarrassed",
    "Enchanting",
    "Encouraging",
    "Energetic",
    "Enthusiastic",
    "Envious",
    "Evil",
    "Excited",
    "Expensive",
    "Exuberant",
    "Fair",
    "Faithful",
    "Famous",
    "Fancy",
    "Fantastic",
    "Fierce",
    "Filthy",
    "Fine",
    "Foolish",
    "Frail",
    "Frantic",
    "Friendly",
    "Frightened",
    "Funny",
    "Gentle",
    "Gifted",
    "Glamorous",
    "Gleaming",
    "Glorious",
    "Good",
    "Gorgeous",
    "Graceful",
    "Grieving",
    "Grotesque",
    "Grumpy",
    "Handsome",
    "Happy",
    "Healthy",
    "Helpful",
    "Helpless",
    "Hilarious",
    "Homeless",
    "Homely",
    "Horrible",
    "Hungry",
    "Hurt",
    "Ill",
    "Important",
    "Impossible",
    "Inexpensive",
    "Inquisitive",
    "Itchy",
    "Jealous",
    "Jittery",
    "Jolly",
    "Joyous",
    "Kind",
    "Lazy",
    "Lively",
    "Lonely",
    "Lovely",
    "Lucky",
    "Magnificent",
    "Misty",
    "Motionless",
    "Mushy",
    "Mysterious",
    "Nasty",
    "Naughty",
    "Nervous",
    "Nice",
    "Nutty",
    "Obedient",
    "Obnoxious",
    "Odd",
    "Old-fashioned",
    "Open",
    "Outrageous",
    "Outstanding",
    "Panicky",
    "Perfect",
    "Pleasant",
    "Poised",
    "Poor",
    "Powerful",
    "Precious",
    "Prickly",
    "Proud",
    "Putrid",
    "Puzzled",
    "Quaint",
    "Real",
    "Relieved",
    "Repulsive",
    "Rich",
    "Scary",
    "Shiny",
    "Shy",
    "Sleepy",
    "Smiling",
    "Sparkling",
    "Splendid",
    "Spotless",
    "Stormy",
    "Strange",
    "Successful",
    "Super",
    "Talented",
    "Tame",
    "Tasty",
    "Tender",
    "Tense",
    "Terrible",
    "Thankful",
    "Thoughtful",
    "Tired",
    "Tough",
    "Troubled",
    "Uninterested",
    "Unsightly",
    "Unusual",
    "Upset",
    "Uptight",
    "Vast",
    "Victorious",
    "Vivacious",
    "Wandering",
    "Weary",
    "Wicked",
    "Wide-eyed",
    "Wild",
    "Witty",
    "Wrong",
    "Zany",
    "Zealous"
  ];

  private loadNouns = () => this.nouns = [
    "Agra Cadabra",
    "Alpaca",
    "Aploparaksis Turdi",
    "Aye-aye",
    "Blobfish",
    "Boops Boops",
    "Cat",
    "Chicken",
    "Chicken Turtle",
    "Dave",
    "Dog",
    "Hamster",
    "Hog",
    "Fried Egg Jellyfish",
    "Frilled-Necked Lizard",
    "Frog",
    "Gorilla",
    "Ice Cream Cone Worm",
    "Leafy Seadragon",
    "LLama",
    "Monkey",
    "Mountain Chicken",
    "Moustached Puffbird",
    "Panda",
    "Pink Fairy Armadillo",
    "Pirate",
    "Pleasing Fungus Beetle",
    "Porpoise",
    "Rasberry Crazy Ant",
    "Sarcastic Fringehead",
    "Satanic Leaf-Tailed Gecko",
    "Screaming Hairy Armadillo",
    "Sparklemuffin",
    "Strange-Tailed Tyrant",
    "Tasseled Wobbegong",
    "Wunderpus Photogenicus"
  ];

  private resetUsedArrays() {
    this.usedEmojis = new Array();
    this.usedAdjectives = new Array();
    this.usedNouns = new Array();
  }
}
