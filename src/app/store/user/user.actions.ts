import { Action } from "@ngrx/store";
import {
  CurrentUserType,
  PaymentType,
  UserDetailsType,
} from "./types/user.type";

export enum UserActions {
  SET_CURRENT_USER = "[User] Set Current User",
  SET_USER_IN_USER_LIST = "[User] Set User",
  SET_PAYMENT_STATUS = "[User] Set Payment Status",
  CLEAR_USER_LIST = "[User] Clear User List",
  CLEAR_CURRENT_USER = "[User] Clear Current User",
}

export class SetCurrentUser implements Action {
  readonly type = UserActions.SET_CURRENT_USER;
  constructor(public payload: CurrentUserType) {}
}

export class SetUserInUserList implements Action {
  readonly type = UserActions.SET_USER_IN_USER_LIST;
  constructor(public payload: UserDetailsType) {}
}

export class SetPaymentStatus implements Action {
  readonly type = UserActions.SET_PAYMENT_STATUS;
  constructor(public payload: PaymentType) {}
}

export class ClearUserList implements Action {
  readonly type = UserActions.CLEAR_USER_LIST;
}

export class ClearCurrentUser implements Action {
  readonly type = UserActions.CLEAR_CURRENT_USER;
}

export type UserActionsUnion =
  | SetUserInUserList
  | SetCurrentUser
  | SetPaymentStatus
  | ClearUserList
  | ClearCurrentUser;
