import {createActionGroup, emptyProps, props} from "@ngrx/store";
import {RegisterRequestInterface} from "../types/registerRequest";
import {CurrentUserInterface} from "../../shared/types/currentUser";

export const authActions = createActionGroup({
  source: 'auth',
  events: {
    Register: props<{request: RegisterRequestInterface}>(),
    'Register success': props<{ currentUser: CurrentUserInterface }>(),
    'Register failure': emptyProps
  }
})
