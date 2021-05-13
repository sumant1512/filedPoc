import { UserDetailsType } from "./user/types/user.type";

export type AppState = Partial<{
  UserDetails: UserDetailsType[];
}>;
