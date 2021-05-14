import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { AppState } from "../app.state";
import { CurrentUserType, UserDetailsType } from "./types/user.type";
import { ClearCurrentUser, ClearUserList, SetCurrentUser, SetUserInUserList } from "./user.actions";

@Injectable({ providedIn: "root" })
export class UserFacade {
  //   outboundBestFares: Observable<OutBoundfares[]> = this.storeService.getState(
  //     BestFareSelectors.outboundFares,
  //   );

  constructor(private store: Store<AppState>) {}

  //   fetchBestFares(searchParameters: BestFareFinderRequest) {
  //     this.storeService.dispatchAction(
  //       new FetchFlightBestFares(searchParameters),
  //     );
  //   }

  clearUserList() {
    this.store.dispatch(new ClearUserList());
  }

  clearCurrentUser() {
    this.store.dispatch(new ClearCurrentUser());
  }
  
  setCurrentUser(currentUserDetails: CurrentUserType) {
    this.store.dispatch(new SetCurrentUser(currentUserDetails));
  }

  setUserInUserList(userDetails: UserDetailsType) {
    this.store.dispatch(new SetUserInUserList(userDetails));
  }
}
