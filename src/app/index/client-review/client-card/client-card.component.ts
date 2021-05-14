import { Component, Input } from "@angular/core";
import { ClientDetailType } from "../client-detail.type";

@Component({
  selector: "app-client-card",
  templateUrl: "./client-card.component.html",
  styleUrls: ["./client-card.component.scss"],
})
export class ClientCardComponent {
  @Input() clientDetail: ClientDetailType;
}
