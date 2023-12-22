import { PlayerInfo } from "./player-info";

export class PlayerInfoSession {
    name: string;
    emoji: string;
    scores: Array<number> = new Array();

    constructor(playerInfo: PlayerInfo) {
        this.name = playerInfo.name;
        this.emoji = playerInfo.emoji;
        this.scores = playerInfo.playerScores.value.map(value => parseFloat(value.score) || 0);
    }
}
