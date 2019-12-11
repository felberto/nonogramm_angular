import {NgModule} from "@angular/core";
import {TutorialComponent} from "./tutorial.component";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {NgbDropdownModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    TutorialComponent
  ],
  exports: [TutorialComponent],
  imports: [CommonModule, RouterModule, NgbDropdownModule],
  providers: []
})
export class TutorialModule {
}
