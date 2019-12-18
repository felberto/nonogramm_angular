import {Component, OnInit} from '@angular/core';
import {GameService} from "../core/services/game.service";
import {User} from "../core/models/user";
import {AuthenticationService} from "../core/services/authentication.service";
import {StateService} from "../core/services/state.service";
import {SaveGame} from "../core/models/save-game";
import {Game} from "../core/models/game";
import {State} from "../core/models/state";
import {Highscore} from "../core/models/highscore";
import {HighscoreService} from "../core/services/highscore.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  currentUser: User;
  private gameId = 0;
  private games: Game[];
  private cols;
  private rows;
  private board: State[][];
  private saveGame;
  private timeSec = 0;
  private timeMin = 0;
  private timer;

  constructor(private authService: AuthenticationService, private gameService: GameService,
              private stateService: StateService, private highscoreService: HighscoreService, private toastr: ToastrService) {
    this.authService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit() {
    window.onbeforeunload = () => this.save();

    if (!this.currentUser) {
      this.saveGame = new SaveGame();
      this.saveGame.type = "10x10";
      this.initBoard(false);
    } else {
      this.stateService.getByUser(this.currentUser.username).subscribe(res => {
        this.saveGame = res.body;
        console.log('46' + this.saveGame.game_id);
        if (res.body == undefined) {
          this.saveGame = new SaveGame();
          this.saveGame.type = "10x10";
          this.initBoard(false);
          console.log('51' + this.saveGame.game_id);
        } else {
          console.log('53' + this.saveGame.game_id);
          this.initBoard(true);
          this.timeMin = this.saveGame.timeMin;
          this.timeSec = this.saveGame.timeSec;
          this.stateService.delete(this.currentUser.username).subscribe(res => {
          });
        }
      });
    }
    this.startTimer();
  }

  startTimer() {
    this.timer = setInterval(() => {
      if (this.timeSec == 59) {
        this.timeMin++;
        this.timeSec = 0;
      } else {
        this.timeSec++;
      }
    }, 1000)
  }

  loadLevel(value: any) {
    this.timeSec = 0;
    this.timeMin = 0;
    clearInterval(this.timer);
    this.startTimer();
    this.saveGame.type = value;
    console.log('82' + this.saveGame.game_id);
    this.initBoard(false);
  }

  save() {
    if (this.currentUser) {
      let saveGame = new SaveGame();
      saveGame.username = this.currentUser.username;
      saveGame.game_id = this.saveGame.game_id;
      saveGame.timeSec = this.timeSec;
      saveGame.timeMin = this.timeMin;
      saveGame.type = this.saveGame.type;
      saveGame.buttons = this.board;

      this.stateService.save(saveGame)
        .subscribe(data => {
            console.log('success')
          }, err => {
            console.log('error')
          }
        )
    } else {
      // Nothing to save
    }
  }

  saveHighscore() {
    let highscore = new Highscore();
    highscore.username = this.currentUser.username;
    let sec = this.timeSec > 9 ? "" + this.timeSec : "0" + this.timeSec;
    let min = this.timeMin > 9 ? "" + this.timeMin : "0" + this.timeMin;
    highscore.time = "" + min + ":" + sec;
    highscore.type = this.saveGame.type;

    this.highscoreService.save(highscore)
      .subscribe(data => {
        console.log('sucess: save highscore');
      }, err => {
        console.log('error: save highscore');
      })
  }

  private initBoard(stateAvailable: boolean) {
    this.gameService.getAllByType(this.saveGame.type).subscribe(res => {
      this.games = res.body;
      console.log('127' + this.saveGame.game_id);
      if (!stateAvailable) {
        this.saveGame.game_id = this.games[this.gameId].game_id;
        this.cols = this.games[this.gameId].columns;
        this.rows = this.games[this.gameId].rows;
        console.log('132' + this.saveGame.game_id);
      } else {
        for (let i = 0; i < this.games.length; i++) {
          if (this.games[i].game_id == this.saveGame.game_id) {
            this.cols = this.games[i].columns;
            this.rows = this.games[i].rows;
            console.log('138' + this.saveGame.game_id);
          }
        }
      }

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

      if (stateAvailable) {
        for (let i = 0; i < this.saveGame.buttons.length; i++) {
          for (let j = 0; j < this.saveGame.buttons[i].length; j++) {
            if (this.saveGame.buttons[i][j] == State.MARKED) {
              this.board[i][j] = State.MARKED;
            } else if (this.saveGame.buttons[i][j] == State.SPACE) {
              this.board[i][j] = State.SPACE;
            } else {
              this.board[i][j] = State.UNDEFINED;
            }
          }
        }
      }
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

    if (this.checkFinish()) {
      clearInterval(this.timer);
      if (!this.currentUser) {
        this.toastr.success("Nonogramm gelöst!", "", {
          positionClass: "toast-bottom-right"
        });
      } else {
        this.toastr.success("Nonogramm gelöst!", "", {
          positionClass: "toast-bottom-right"
        });
        this.saveHighscore();
        this.timeSec = 0;
        this.timeMin = 0;
      }
    }
  }

  private checkFinish() {
    let solution;

    for (let i = 0; i < this.games.length; i++) {
      if (this.games[i].game_id == this.saveGame.game_id) {
        solution = this.games[i].solution;
      }
    }
    let finished = true;

    for (let i = 0; i < solution.length; i++) {
      for (let j = 0; j < solution[i].length; j++) {
        if (solution[i][j]) {
          if (!(this.board[i][j] == State.MARKED)) {
            finished = false;
            break;
          }
        }
      }
    }

    return finished;
  }

  private loadSolution() {
    this.timeSec = 0;
    this.timeMin = 0;
    clearInterval(this.timer);

    let solution;
    for (let i = 0; i < this.games.length; i++) {
      if (this.games[i].game_id == this.saveGame.game_id) {
        solution = this.games[i].solution;
      }
    }

    for (let i = 0; i < solution.length; i++) {
      for (let j = 0; j < solution[i].length; j++) {
        if (solution[i][j]) {
          this.board[i][j] = State.MARKED;
        } else {
          this.board[i][j] = State.UNDEFINED;
        }
      }
    }
  }

  private loadNext() {
    console.log('274' + this.saveGame.game_id);
    this.timeSec = 0;
    this.timeMin = 0;
    clearInterval(this.timer);
    this.startTimer();
    this.gameId = ((this.gameId + 1) % 4);
    console.log('280' + this.saveGame.game_id);
    this.initBoard(false);
  }

  private reset() {
    this.timeSec = 0;
    this.timeMin = 0;
    clearInterval(this.timer);
    this.startTimer();
    let rowLength = this.rows.length;
    let colLength = this.cols.length;

    this.board = new Array(rowLength).fill(State.UNDEFINED).map(() => new Array(colLength).fill(State.UNDEFINED));
  }
}
