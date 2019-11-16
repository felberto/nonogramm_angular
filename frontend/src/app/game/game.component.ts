import {Component, OnInit} from '@angular/core';
import {GameService} from "../core/services/game.service";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor(private gameService: GameService) {
  }

  ngOnInit() {
    //Only for testing api
    this.gameService.getAllByType("10x10").subscribe(res => {
      console.log(res.body);
    })
  }

}
