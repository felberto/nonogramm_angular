import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {UserService} from "../core/services/user.service";
import {first} from "rxjs/operators";
import {AuthenticationService} from "../core/services/authentication.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userForm: FormGroup;
  submitted = false;

  constructor(public activeModal: NgbActiveModal, private toastr: ToastrService, private formBuilder: FormBuilder, private router: Router, private userService: UserService, private authService: AuthenticationService) {

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
    this.authService.login(this.userForm.value)
      .subscribe(data => {
          if (data != null) {
            this.activeModal.dismiss();
            this.router.navigate(['/game']);
          } else {
          }
        }, err => {
          this.toastr.error("Login fehlgeschlagen", "", {
            positionClass: "toast-bottom-right"
          });
        }
      )
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
          this.toastr.success("Registration erfolgreich", "", {
            positionClass: "toast-bottom-right"
          });
          this.router.navigate(['/game']);
          this.activeModal.close();
        },
        error => {
          this.toastr.error("Registration fehlgeschlagen", "", {
            positionClass: "toast-bottom-right"
          });
        });
  }

}
