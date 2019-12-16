import {State} from "./state";

export class SaveGame {
  username: string;
  game_id: number;
  timeSec: number;
  timeMin: number;
  type: string;
  buttons: State[][];
}
