import { UntypedFormArray } from "@angular/forms";

export class PlayerInfo {
    name: string;
    emoji: string;
    playerScores: UntypedFormArray;

    constructor(name: string, emoji: string, playerScores: UntypedFormArray) {
        this.name = name;
        this.emoji = emoji;
        this.playerScores = playerScores;
    }
}
