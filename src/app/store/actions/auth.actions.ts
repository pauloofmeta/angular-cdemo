import { Action } from '@ngrx/store';

export enum AuthActionTypes {
  Login = '[Auth] LogIn',
  LogInSuccess = '[Auth] LogInSuccess',
  LogInFailure = '[Auth] LogInFailure',
  SignUp = '[Auth] SignUp',
  SignUpSuccess = '[Auth] SignUpSuccess',
  SignUpFailure = '[Auth] SignUpFailure',
  Logout = '[Auth] Logout'
}

export class LogIn implements Action {
  readonly type = AuthActionTypes.Login;
  constructor(public payload: any) {}
}

export class LogInSuccess implements Action {
  readonly type = AuthActionTypes.LogInSuccess;
  constructor(public payload: any) {}
}

export class LogInFailure implements Action {
  readonly type = AuthActionTypes.LogInFailure;
  constructor(public payload: any) {}
}

export class SignUp implements Action {
  readonly type = AuthActionTypes.SignUp
  constructor(public payload: any) {}
}

export class SignUpSuccess implements Action {
  readonly type = AuthActionTypes.SignUpSuccess
  constructor(public payload: any){}
}

export class SignUpFailure implements Action {
  readonly type = AuthActionTypes.SignUpFailure
  constructor(public payload: any){}
}

export class Logout implements Action {
  readonly type = AuthActionTypes.Logout
}

export type All =
  | LogIn
  | LogInSuccess
  | LogInFailure
  | SignUp
  | SignUpSuccess
  | SignUpFailure
  | Logout;