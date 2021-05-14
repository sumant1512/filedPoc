import { createSelector, MemoizedSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { CurrentUserType, UserDetailsType } from "./types/user.type";

export const userDetails = (state: AppState) => state.UserDetails;

export const userList: MemoizedSelector<AppState, UserDetailsType[]> =
  createSelector(userDetails, (state) => {
    if (state) {
      return state.UserList;
    }
  });

export const currentUser: MemoizedSelector<AppState, CurrentUserType> =
  createSelector(userDetails, (state) => {
    if (state) {
      return state.CurrentUser;
    }
  });
