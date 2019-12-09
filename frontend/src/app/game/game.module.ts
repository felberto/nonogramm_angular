import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {NgbDropdownModule} from "@ng-bootstrap/ng-bootstrap";
import {GameComponent} from "./game.component";

@NgModule({
  declarations: [
    GameComponent
  ],
  exports: [GameComponent],
  imports: [CommonModule, RouterModule, NgbDropdownModule]
})

export class GameModule {
}
