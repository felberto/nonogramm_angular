import {Component, OnInit} from "@angular/core";
import {GameService} from "../core/services/game.service";
import {Game} from "../core/models/game";

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./game.component.css']
})
export class BoardComponent implements OnInit {

  private games: Game[];
  private cols;
  private rows;

  constructor(private gameService: GameService) {
  }

  ngOnInit() {
    this.gameService.getAllByType("10x10").subscribe(res => {
      this.games = res.body;
      this.cols = this.games[0].columns;
      this.rows = this.games[0].rows;

      // create 1D array for the row labels
      var newArrRows = this.rows;
      for (var i = 0; i < this.rows.length; i++) {
        if (this.rows[i].length > 1) {
          var row = "";
          for (var j = 0; j < this.rows[i].length; j++) {
            row = row.concat(" " + this.rows[i][j]);
          }
          newArrRows[i] = row.trim();
        } else {
          newArrRows[i] = "" + this.rows[i][0];
        }
      }
      this.rows = newArrRows;

      // create 1D array for the column labels
      var newArrColumns = [this.cols.length];
      for (var i = 0; i < this.cols.length; i++) {
        if (this.cols[i].length > 1) {
          var col = "";
          for (var j = 0; j < this.cols[i].length; j++) {
            col = col.concat(" " + this.cols[i][j]);
          }
          newArrColumns[i] = col.trim();
        } else {
          newArrColumns[i] = "" + this.cols[i][0];
        }
      }
      this.cols = newArrColumns;
    });
  }
}
