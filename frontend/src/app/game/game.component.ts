import {Component, OnInit} from '@angular/core';
import {GameService} from "../core/services/game.service";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  private level: string;

  constructor(private gameService: GameService) {
  }

  ngOnInit() {
    //TODO load save game and set level; default 10x10
    this.level = "10x10";
  }

  loadLevel(value: any) {
    this.level = value;
    //TODO if changed, call function for create board with selected level
  }
}
