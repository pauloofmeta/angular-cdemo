import { trigger, transition, style, animate, AnimationEvent } from "@angular/animations";
import { Component, Input } from "@angular/core";
import { MenuItemModel } from "../../models/menu-item.model";

@Component({
  selector: 'menu-item',
  templateUrl: 'menu-item.component.html',
  styleUrls: ['menu-item.component.scss'],
  animations:[
    trigger('overlayAnimation', [
      transition(':enter', [
        style({opacity: 0, transform: 'scaleY(0.8)'}),
        animate('.12s cubic-bezier(0, 0, 0.2, 1)')
      ]),
      transition(':leave', [
        animate('.1s linear', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class MenuItemComponent {
  @Input() route: string;
  @Input() label: string;
  @Input() subItems: MenuItemModel[];

  subVisible: boolean;
  preventDocumentDefault: boolean;

  hasSubItems = () => this.subItems && this.subItems.length > 0;

  toogleSubmenu() {
    this.subVisible = !this.subVisible;
  }

  onAnimationStart(event: AnimationEvent) {
  }
}