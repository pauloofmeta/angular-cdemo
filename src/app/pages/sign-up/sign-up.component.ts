import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from 'src/app/models/user.model';
import { SignUp } from 'src/app/store/actions/auth.actions';
import { AppState } from 'src/app/store/app.state';

@Component({
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  user: User = {}

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const payload = {
      email: this.user.email,
      password: this.user.password
    }
    this.store.dispatch(new SignUp(payload))
  }

}
