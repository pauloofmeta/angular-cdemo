import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { LogIn } from 'src/app/store/actions/auth.actions';
import { AppState, selectAuthState } from 'src/app/store/app.state';

@Component({
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  user: User = {};
  getState: Observable<any>;
  erroMessage: string | null;

  constructor(
    private store: Store<AppState>
  ) { 
    this.getState = this.store.select(selectAuthState);
  }

  ngOnInit(): void {
    this.getState.subscribe((state) => {
      this.erroMessage = state.errorMessage;
    });
  }

  onSubmit(): void {
    const paylaod = {
      email: this.user.email,
      password: this.user.password
    }
    this.store.dispatch(new LogIn(paylaod));
  }

}
