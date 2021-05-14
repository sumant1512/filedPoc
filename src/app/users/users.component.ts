import { Component, OnDestroy, OnInit } from "@angular/core";
import { Location } from "@angular/common";
import { UserDetailsType } from "../store/user/types/user.type";
import { UserFacade } from "../store/user/user.facade";
import { Subscription } from "rxjs";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.scss"],
})
export class UsersComponent implements OnInit, OnDestroy {
  userList: UserDetailsType[];
  subscription: Subscription = new Subscription();
  constructor(private userFacade: UserFacade, private localtion: Location) {}

  ngOnInit(): void {
    this.getUserList();
  }

  getUserList(): void {
    this.subscription.add(
      this.userFacade.getUserList.subscribe((userList) => {
        this.userList = userList;
      })
    );
  }

  goBack(): void {
    this.localtion.back();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
