import {NgModule} from "@angular/core";
import {TutorialComponent} from "./tutorial.component";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {NgbDropdownModule} from "@ng-bootstrap/ng-bootstrap";
import {NavigationModule} from "../navigation/navigation.module";

@NgModule({
  declarations: [
    TutorialComponent
  ],
  exports: [TutorialComponent],
  imports: [CommonModule, RouterModule, NgbDropdownModule, NavigationModule],
  providers: []
})
export class TutorialModule {
}
