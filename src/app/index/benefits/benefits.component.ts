import { Component, OnInit } from "@angular/core";
import { Benefits } from "./benefits.constants";

@Component({
  selector: "app-benefits",
  templateUrl: "./benefits.component.html",
  styleUrls: ["./benefits.component.scss"],
})
export class BenefitsComponent implements OnInit {
  LABELS = Benefits;
  constructor() {}

  ngOnInit(): void {}
}
