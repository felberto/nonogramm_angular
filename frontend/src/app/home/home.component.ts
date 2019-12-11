import {Component, OnInit} from '@angular/core';
import {LoginModalService} from "../core/services/modal/login.modal.service";
import {Router} from "@angular/router";
import {AuthenticationService} from "../core/services/authentication.service";
import {User} from "../core/models/user";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentUser: User;


  constructor(private loginModalService: LoginModalService, private router: Router, private authService: AuthenticationService) {
    this.authService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit() {
  }

  openModal() {
    this.loginModalService.open();
  }

}
