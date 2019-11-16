import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GameService} from "./services/game.service";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    GameService
  ]
})
export class CoreModule {
}
