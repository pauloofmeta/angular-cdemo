import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MenuItemComponent } from './components/menu/menu-item.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, NavbarComponent, MenuItemComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
