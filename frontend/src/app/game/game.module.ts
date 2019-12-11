import {NgModule} from "@angular/core";
import {GameComponent} from "./game.component";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "../app-routing.module";
import {CoreModule} from "../core/core.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BoardComponent} from "../board/board.component";
import {NavigationModule} from "../navigation/navigation.module";

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
    BrowserAnimationsModule,
    NavigationModule
  ],
  entryComponents: [BoardComponent]
})

export class GameModule {
}
