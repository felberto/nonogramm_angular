import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GameService} from "./services/game.service";
import {HttpClientModule} from "@angular/common/http";
import {LoginModalService} from "./services/modal/login.modal.service";
import {HighscoreService} from "./services/highscore.service";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    GameService,
    LoginModalService,
    HighscoreService
  ]
})
export class CoreModule {
}
