import { Users } from "./user/types/user.type";

export type AppState = Partial<{
  UserDetails: Users;
}>;
