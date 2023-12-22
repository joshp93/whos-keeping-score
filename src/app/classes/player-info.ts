import { FormArray, FormControl, FormGroup } from "@angular/forms";

export class PlayerInfo {
    name: string;
    emoji: string;
    playerScores: FormArray;

    constructor(name: string, emoji: string, playerScores: FormArray) {
        this.name = name;
        this.emoji = emoji;
        this.playerScores = playerScores;
    }
}
