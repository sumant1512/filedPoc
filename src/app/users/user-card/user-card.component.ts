import { Component, Input, OnInit } from "@angular/core";
import { UserDetailsType } from "src/app/store/user/types/user.type";

@Component({
  selector: "app-user-card",
  templateUrl: "./user-card.component.html",
  styleUrls: ["./user-card.component.scss"],
})
export class UserCardComponent implements OnInit {
  @Input() userDetail: UserDetailsType;
  constructor() {}

  ngOnInit(): void {}
}
