import { Component } from "@angular/core";
import { ThemeService } from 'src/app/services/theme.service';
import { MenuItemModel } from "../../models/menu-item.model";
import { faAdjust } from "@fortawesome/free-solid-svg-icons";
import { Store } from '@ngrx/store';
import { AppState, selectAuthState } from 'src/app/store/app.state';
import { Logout } from 'src/app/store/actions/auth.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.scss']
})
export class NavbarComponent {
  admItems: MenuItemModel[];
  
  getState: Observable<any>;

  constructor(
    private themeService: ThemeService,
    private store: Store<AppState>
  ) {
    this.getState = this.store.select(selectAuthState);

    this.admItems = [
      {
        label: 'Usuários',
        route: '/user'
      },
      {
        label: 'Empresas',
        route: '/company'
      }
    ]
  }

  toogleTheme() {
    this.themeService.toogle();
  }

  logOut() {
    this.store.dispatch(new Logout);
  }
}