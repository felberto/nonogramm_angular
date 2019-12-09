import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {UserService} from "../core/services/user.service";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userForm: FormGroup;
  submitted = false;

  constructor(public activeModal: NgbActiveModal, private formBuilder: FormBuilder, private router: Router, private userService: UserService) {

  }

  // convenience getter for easy access to form fields
  get f() {
    return this.userForm.controls;
  }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {

  }

  register() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.userForm.invalid) {
      return;
    }

    this.userService.save(this.userForm.value)
      .pipe(first())
      .subscribe(
        data => {

          this.router.navigate(['/game']);
        },
        error => {
          console.log('error');
        });
  }

}
