import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { AppState } from "../app.state";
import {
  CurrentUserType,
  PaymentType,
  UserDetailsType,
  Users,
} from "./types/user.type";
import {
  ClearCurrentUser,
  ClearUserList,
  SetCurrentUser,
  SetPaymentStatus,
  SetUserInUserList,
} from "./user.actions";
import * as UserSelectors from "./user.selectors";

@Injectable({ providedIn: "root" })
export class UserFacade {
  getUserDetails: Observable<Users> = this.store.select(
    UserSelectors.userDetails
  );

  getUserList: Observable<UserDetailsType[]> = this.store.select(
    UserSelectors.userList
  );

  getEmailList: Observable<string[]> = this.store.select(
    UserSelectors.emailList
  );

  getCurrentUser: Observable<CurrentUserType> = this.store.select(
    UserSelectors.currentUser
  );

  constructor(private store: Store<AppState>) {}
  clearUserList() {
    this.store.dispatch(new ClearUserList());
  }

  clearCurrentUser() {
    this.store.dispatch(new ClearCurrentUser());
  }

  setCurrentUser(currentUserDetails: CurrentUserType) {
    this.store.dispatch(new SetCurrentUser(currentUserDetails));
  }

  setUserInUserList(userDetails: UserDetailsType) {
    this.store.dispatch(new SetUserInUserList(userDetails));
  }

  setPaymentStatus(paymentDetails: PaymentType) {
    this.store.dispatch(new SetPaymentStatus(paymentDetails));
  }
}
