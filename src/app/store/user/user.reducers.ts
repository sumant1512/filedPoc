import { UserDetailsType } from "./types/user.type";
import { UserActions, UserActionsUnion } from "./user.actions";

const profile: UserDetailsType[] = [];

export function userDetailsReducer(state = profile, action: UserActionsUnion): any {
  switch (action.type) {
    case UserActions.SET_USER_DETAILS:
      return action.payload;
    default:
      return state;
  }
}
