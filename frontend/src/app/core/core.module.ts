import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GameService} from "./services/game.service";
import {HttpClientModule} from "@angular/common/http";
import {LoginModalService} from "./services/modal/login.modal.service";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    GameService,
    LoginModalService,
  ]
})
export class CoreModule {
}
