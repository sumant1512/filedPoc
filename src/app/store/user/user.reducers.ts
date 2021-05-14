import { UserDetailsType, Users } from "./types/user.type";
import { UserActions, UserActionsUnion } from "./user.actions";

const Users: Users = {
  UserList: [],
  CurrentUser: {
    adsConvert: "",
    monthlyBudget: 0,
  },
};

export function userDetailsReducer(
  state = Users,
  action: UserActionsUnion
): Users {
  switch (action.type) {
    case UserActions.SET_CURRENT_USER:
      return {
        ...state,
        CurrentUser: action.payload,
      };
    case UserActions.SET_USER_IN_USER_LIST:
      return {
        UserList: [...state.UserList, action.payload],
        CurrentUser: Users.CurrentUser,
      };
    default:
      return state;
  }
}
