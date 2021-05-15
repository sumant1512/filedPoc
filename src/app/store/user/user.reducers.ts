import { mockUsersList } from "./mocks/users.mock";
import { Users } from "./types/user.type";
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
    case UserActions.SET_PAYMENT_STATUS:
      return {
        UserList: updatePaymentStatus(state.UserList, action.payload),
        CurrentUser: Users.CurrentUser,
      };
    default:
      return state;
  }
}

export function updatePaymentStatus(userList, paymentStatus) {
  const updatedUserList = [];
  userList.map((user) => {
    if (user.email === paymentStatus.email) {
      user = {
        ...user,
        isPaymentDone: paymentStatus.isPaymentDone,
      };
    }
    updatedUserList.push(user);
  });
  return updatedUserList;
}
