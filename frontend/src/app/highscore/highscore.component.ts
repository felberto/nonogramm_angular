import {Component, OnInit} from '@angular/core';
import {HighscoreService} from "../core/services/highscore.service";
import {Highscore} from "../core/models/highscore";

@Component({
  selector: 'app-highscore',
  templateUrl: './highscore.component.html',
  styleUrls: ['./highscore.component.css']
})
export class HighscoreComponent implements OnInit {

  private scores10x10: Highscore[];
  private scores15x15: Highscore[];

  constructor(private highscoreService: HighscoreService) {
  }

  ngOnInit() {
    this.highscoreService.getAllByType("10x10").subscribe(res => {
      this.scores10x10 = res.body;
      this.scores10x10.sort((a, b) => (a.time > b.time) ? 1 : ((b.time > a.time) ? -1 : 0));
    });

    this.highscoreService.getAllByType("15x15").subscribe(res => {
      this.scores15x15 = res.body;
      this.scores15x15.sort((a, b) => (a.time > b.time) ? 1 : ((b.time > a.time) ? -1 : 0));
    });
  }

}
