import {CommonModule} from "@angular/common";
import {HomeComponent} from "./home.component";
import {NgModule} from "@angular/core";
import {LoginComponent} from "../login/login.component";
import {LoginModalService} from "../core/services/modal/login.modal.service";
import {RouterModule} from "@angular/router";
import {NgbDropdownModule} from "@ng-bootstrap/ng-bootstrap";
import {LoginModule} from "../login/login.module";

@NgModule({
  declarations: [
    HomeComponent
  ],
  exports: [HomeComponent],
  imports: [CommonModule, RouterModule, LoginModule, NgbDropdownModule],
  providers: [LoginModalService],
  entryComponents: [LoginComponent]
})

export class HomeModule {
}
