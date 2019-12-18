import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "../app-routing.module";
import {CoreModule} from "../core/core.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NavigationComponent} from "./navigation.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [NavigationComponent],
  exports: [NavigationComponent],
  providers: [],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  entryComponents: []
})

export class NavigationModule {
}
