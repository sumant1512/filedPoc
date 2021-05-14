import { Component, OnInit } from "@angular/core";
import { Offers } from "./offers.constants";

@Component({
  selector: "app-offers",
  templateUrl: "./offers.component.html",
  styleUrls: ["./offers.component.scss"],
})
export class OffersComponent implements OnInit {
  LABELS = Offers;
  constructor() {}

  ngOnInit(): void {}
}
