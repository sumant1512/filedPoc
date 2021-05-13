import { ActionReducerMap } from "@ngrx/store";
import { AppState } from "./app.state";
import { userDetailsReducer } from "./user/user.reducers";

export const appReducers: ActionReducerMap<AppState> = {
  UserDetails: userDetailsReducer,
};
