import { Component } from "@angular/core";
import { ThemeService } from 'src/app/services/theme.service';
import { MenuItemModel } from "../../models/menu-item.model";
import { faAdjust } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.scss']
})
export class NavbarComponent {
  admItems: MenuItemModel[];
  themIcon = faAdjust;

  constructor(private themeService: ThemeService) {
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
}