import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {NgbDropdownModule} from "@ng-bootstrap/ng-bootstrap";
import {HighscoreComponent} from "./highscore.component";
import {CoreModule} from "../core/core.module";
import {NavigationModule} from "../navigation/navigation.module";

@NgModule({
  declarations: [
    HighscoreComponent
  ],
  exports: [HighscoreComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgbDropdownModule,
    CoreModule,
    NavigationModule
  ]
})

export class HighscoreModule {
}
