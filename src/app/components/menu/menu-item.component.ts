import { trigger, transition, style, animate, AnimationEvent } from "@angular/animations";
import { Component, ElementRef, Input, OnDestroy, Renderer2 } from "@angular/core";
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
export class MenuItemComponent implements OnDestroy {
  @Input() route: string;
  @Input() label: string;
  @Input() subItems: MenuItemModel[];

  subVisible: boolean;
  preventDocumentDefault: boolean;
  documentoClickListner: any;
  documentoReziseListner: any;

  constructor(public el: ElementRef,
    public renderer: Renderer2) {
  }

  ngOnDestroy() {
    this.onOverlayHide();
  }

  hasSubItems = () => this.subItems && this.subItems.length > 0;

  toogleSubmenu() {
    this.subVisible = !this.subVisible;
    this.preventDocumentDefault = true;
  }

  hide = () => this.subVisible = false;

  onSubItemClick() {    
    this.hide();
  }

  onAnimationStart(event: AnimationEvent) {
    switch (event.toState) {
      case 'subVisible':
        this.bindDocumentClick();
        this.bindDocumentRezise();
        break;

      case 'void':
        this.onOverlayHide();
        break;
    }
  }

  bindDocumentClick() {
    if (!this.documentoClickListner) {
      const documentoTarget = this.el ? this.el.nativeElement.ownerDocument : 'document';
      this.documentoClickListner = this.renderer.listen(documentoTarget, 'click', () => {
        if (!this.preventDocumentDefault) {
          this.hide();
        }
        this.preventDocumentDefault = false;
      });
    }
  }

  bindDocumentRezise() {
    this.documentoReziseListner = this.onWindowsRezise.bind(this);
    window.addEventListener('resize', this.documentoReziseListner);
  }

  unBindDocumentClick() {
    if (this.documentoClickListner) {
      this.documentoClickListner();
      this.documentoClickListner = null;
    }
  }

  unbindDocumentResizeListener() {
    if (this.documentoReziseListner) {
        window.removeEventListener('resize', this.documentoReziseListner);
        this.documentoReziseListner = null;
    }
  }

  onOverlayHide() {
    this.unBindDocumentClick();
    this.unbindDocumentResizeListener();
    this.preventDocumentDefault = false;
  }

  onWindowsRezise() {
    this.hide();
  }
}