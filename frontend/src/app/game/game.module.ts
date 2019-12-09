import {NgModule} from "@angular/core";
import {GameComponent} from "./game.component";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "../app-routing.module";
import {CoreModule} from "../core/core.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BoardComponent} from "./board.component";

@NgModule({
  declarations: [
    GameComponent,
    BoardComponent
  ],
  exports: [GameComponent],
  providers: [],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule
  ],
  entryComponents: [BoardComponent]
})

export class GameModule {
}
