import { SignUpSuccess } from './../actions/auth.actions';
import { All, AuthActionTypes } from '../actions/auth.actions';
import { User } from 'src/app/models/user.model';

export interface AuthState {
  isAuthenticate: boolean,
  user?: User | null,
  errorMessage?: string | null;
}

export const initialState: AuthState = {
  isAuthenticate: false
}

export function reducer(state = initialState, action: All): AuthState {
  switch (action.type) {
    case AuthActionTypes.LogInSuccess: {
      return {
        ...state,
        isAuthenticate: true,
        user: {
          token: action.payload.token,
          email: action.payload.email
        },
        errorMessage: null
      }
    }
    case AuthActionTypes.LogInFailure: {
      return {
        ...state,
        errorMessage: 'Incorrect email and/or password.'
      };
    }
    case AuthActionTypes.SignUpSuccess: {
      return {
        ...state,
        isAuthenticate: true,
        user: {
          token: action.payload.token,
          email: action.payload.email
        },
        errorMessage: null
      };
    }
    case AuthActionTypes.SignUpFailure: {
      return {
        ...state,
        errorMessage: 'That email is already in use.'
      }
    }
    case AuthActionTypes.Logout: {
      return initialState
    }
    default: {
      return state;
    }
  }
}