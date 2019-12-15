import {Component, OnInit} from '@angular/core';
import {HighscoreService} from "../core/services/highscore.service";

@Component({
  selector: 'app-highscore',
  templateUrl: './highscore.component.html',
  styleUrls: ['./highscore.component.css']
})
export class HighscoreComponent implements OnInit {

  constructor(private highscoreService: HighscoreService) {
  }

  ngOnInit() {
  }

}
