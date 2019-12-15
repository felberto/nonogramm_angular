import {State} from "./state";

export class SaveGame {
  username: string;
  game_id: number;
  time: number;
  type: string;
  buttons: State[][];
}
