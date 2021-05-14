import { Component, OnInit } from "@angular/core";
import { ClientReviewList } from "./client-review-constants";

@Component({
  selector: "app-client-review",
  templateUrl: "./client-review.component.html",
  styleUrls: ["./client-review.component.scss"],
})
export class ClientReviewComponent implements OnInit {
  LABELS = ClientReviewList;
  constructor() {}

  ngOnInit(): void {}
}
