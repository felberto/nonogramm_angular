import {Component} from '@angular/core';
import {User} from "../core/models/user";
import {AuthenticationService} from "../core/services/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  currentUser: User;

  constructor(private authService: AuthenticationService, private router: Router) {
    this.authService.currentUser.subscribe(x => this.currentUser = x);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['']);
  }

}
