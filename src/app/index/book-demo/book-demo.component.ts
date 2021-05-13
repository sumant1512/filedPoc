import { Component, OnInit } from "@angular/core";
import { BookDemo } from "./book-demo.constants";

@Component({
  selector: "app-book-demo",
  templateUrl: "./book-demo.component.html",
  styleUrls: ["./book-demo.component.scss"],
})
export class BookDemoComponent implements OnInit {
  LABELS = BookDemo;

  constructor() {}

  ngOnInit(): void {}
}
