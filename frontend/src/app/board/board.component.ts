import {Component, OnInit} from "@angular/core";
import {GameService} from "../core/services/game.service";
import {Game} from "../core/models/game";

enum State {
  UNDEFINED,
  MARKED,
  SPACE
}

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['../game/game.component.css']
})
export class BoardComponent implements OnInit {

  private gameId = 0;
  private games: Game[];
  private cols;
  private rows;
  private board: State[][];

  constructor(private gameService: GameService) {
  }

  ngOnInit() {
    this.gameService.getAllByType("10x10").subscribe(res => {
      this.games = res.body;
      this.cols = this.games[this.gameId].columns;
      this.rows = this.games[this.gameId].rows;

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

      let rowLength = this.rows.length;
      let colLength = this.cols.length;
      this.board = new Array(rowLength).fill(State.UNDEFINED).map(() => new Array(colLength).fill(State.UNDEFINED));
    });
  }

  private clickButton(i: number, j: number) {
    let btn = this.board[i][j];

    switch (btn) {
      case State.UNDEFINED:
        this.board[i][j] = State.MARKED;
        break;
      case State.MARKED:
        this.board[i][j] = State.SPACE;
        break;
      case State.SPACE:
        this.board[i][j] = State.UNDEFINED;
        break;
    }
  }
}
