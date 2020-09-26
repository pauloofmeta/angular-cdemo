import { Component } from "@angular/core";
import { MenuItemModel } from "../../models/menu-item.model";

@Component({
  selector: 'navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.scss']
})
export class NavbarComponent {
  admItems: MenuItemModel[];

  constructor() {
    this.admItems = [
      {
        label: 'Usuários'
      },
      {
        label: 'Empresas'
      }
    ]
  }
}