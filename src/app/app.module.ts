import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MenuItemComponent } from './components/menu/menu-item.component';
import { ThemeService } from './services/theme.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AppRoutingModule } from './app.routing';
import { APP_BASE_HREF } from '@angular/common';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { CompanyPageComponent } from './pages/company-page/company-page.component';

export function themeFactory(themeService: ThemeService) {
  return () => themeService.setThemeOnStart();
}

@NgModule({
  imports:      [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    FontAwesomeModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    NavbarComponent,
    MenuItemComponent,
    HomePageComponent,
    AboutPageComponent,
    UserPageComponent,
    CompanyPageComponent
  ],
  providers: [
    ThemeService,
    { provide: APP_INITIALIZER, useFactory: themeFactory, deps: [ThemeService], multi: true},
    { provide: APP_BASE_HREF, useValue: '/' },
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
