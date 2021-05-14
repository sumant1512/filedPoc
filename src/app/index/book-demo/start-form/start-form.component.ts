import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
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
  constructor() {
    this.startForm = startForm();
    this.contactForm = contactForm();
  }

  ngOnInit(): void {}

  get f() {
    return this.startForm.controls;
  }

  letsStart(): void {
    console.log(this.startForm.value);
    this.isContactFormActive = true;
  }

  letsContact(): void {
    console.log(this.contactForm.value);
  }
}
