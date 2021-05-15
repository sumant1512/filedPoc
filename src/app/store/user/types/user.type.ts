export interface UserDetailsType {
  firstName: string;
  lastName: string;
  email: string;
  monthlyAdBudget: number;
  countrycode: string;
  phone: number;
  isPaymentDone: boolean;
}

export interface PaymentType {
  email: string;
  isPaymentDone: boolean;
}

export interface CurrentUserType {
  adsConvert: string;
  monthlyBudget: number;
}

export interface Users {
  UserList: UserDetailsType[];
  CurrentUser: CurrentUserType;
}
