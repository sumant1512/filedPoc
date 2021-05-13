import { Action } from "@ngrx/store";
import { UserDetailsType } from "./types/user.type";

export enum UserActions {
  SET_USER_DETAILS = "[User] Set User Details",
}

export class SetUserDetail implements Action {
  readonly type = UserActions.SET_USER_DETAILS;
  constructor(public payload: UserDetailsType) {}
}

export type UserActionsUnion = SetUserDetail;
