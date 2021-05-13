import { Actions, Effect, ofType } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { UserActions, UserActionsUnion } from "./user.actions";
import { mergeMap, map, tap } from "rxjs/operators";
import { Router } from "@angular/router";

@Injectable()
export class UserEffects {
  constructor(
    private action$: Actions<UserActionsUnion>,
    private router: Router
  ) {}
}
