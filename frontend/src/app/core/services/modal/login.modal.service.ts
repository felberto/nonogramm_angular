import {Injectable} from "@angular/core";
import {LoginComponent} from "../../../login/login.component";
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";

@Injectable()
export class LoginModalService {
  private isOpen = false;

  constructor(
    private modalService: NgbModal,
  ) {
  }

  open(): NgbModalRef {
    if (this.isOpen) {
      return;
    }
    this.isOpen = true;
    const modalRef = this.modalService.open(LoginComponent, {centered: true});
    modalRef.result.then((result) => {
      this.isOpen = false;
    }, (reason) => {
      this.isOpen = false;
    });
    return modalRef;
  }
}
