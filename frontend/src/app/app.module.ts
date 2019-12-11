import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {TutorialModule} from "./tutorial/tutorial.module";
import {LoginModule} from "./login/login.module";
import {HighscoreModule} from "./highscore/highscore.module";
import {GameModule} from "./game/game.module";
import {HomeModule} from "./home/home.module";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    TutorialModule,
    LoginModule,
    HomeModule,
    HighscoreModule,
    GameModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
