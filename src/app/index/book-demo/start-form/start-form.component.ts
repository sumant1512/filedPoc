import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { UserFacade } from "src/app/store/user/user.facade";
import { StartFormLabels } from "./start-form.constants";
import { contactForm, startForm } from "./start-from.utils";

@Component({
  selector: "app-start-form",
  templateUrl: "./start-form.component.html",
  styleUrls: ["./start-form.component.scss"],
})
export class StartFormComponent implements OnInit {
  startForm: FormGroup;
  contactForm: FormGroup;
  LABELS = StartFormLabels;
  isContactFormActive: boolean;
  constructor(private userFacade: UserFacade) {
    this.startForm = startForm();
    this.contactForm = contactForm();
  }

  ngOnInit(): void {}

  get f() {
    return this.startForm.controls;
  }

  letsStart(): void {
    this.userFacade.setCurrentUser(this.startForm.value);
    this.isContactFormActive = true;
  }

  letsContact(): void {
    this.userFacade.setUserInUserList(this.contactForm.value);
    this.isContactFormActive = false;
  }
}
