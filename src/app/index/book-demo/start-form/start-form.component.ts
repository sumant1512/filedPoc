import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { StartFormLabels } from "./start-form.constants";
import { startForm } from "./start-from.utils";

@Component({
  selector: "app-start-form",
  templateUrl: "./start-form.component.html",
  styleUrls: ["./start-form.component.scss"],
})
export class StartFormComponent implements OnInit {
  startForm: FormGroup;
  LABELS = StartFormLabels;
  constructor() {
    this.startForm = startForm();
  }

  ngOnInit(): void {}

  get f() {
    return this.startForm.controls;
  }

  letsStart(): void {
    console.log(this.startForm.value);
  }
}
