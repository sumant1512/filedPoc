import { createSelector, MemoizedSelector } from "@ngrx/store";
import { AppState } from "../app.state";

export const fetchUserDetails = (state: AppState) => state.UserDetails;

export const userDetails: MemoizedSelector<AppState, any> = createSelector(
  fetchUserDetails,
  (state) => {
    if (state) {
      return state;
    }
  }
);
