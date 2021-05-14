export interface UserDetailsType {
  firstName: string;
  lastName: string;
  email: string;
  monthlyAdBudget: number | string;
  countrycode: string;
  phone: number | string;
}

export interface CurrentUserType {
  adsConvert: string;
  monthlyBudget: number;
}

export interface Users {
  UserList: UserDetailsType[];
  CurrentUser: CurrentUserType;
}
