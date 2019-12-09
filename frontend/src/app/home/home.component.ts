import {Component, OnInit} from '@angular/core';
import {LoginModalService} from "../core/services/modal/login.modal.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private loginModalService: LoginModalService, private router: Router) {
  }

  ngOnInit() {
  }

  openModal() {
    this.loginModalService.open();
  }

}
