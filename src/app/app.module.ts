import { reducers } from './store/app.state';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { PublicLayoutComponent } from './layouts/public-layout/public-layout.component';
import { MaterialModule } from './shared/material.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AuthService } from './services/auth.service';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './store/effects/auth.effect';
import { StoreModule } from '@ngrx/store';
import { AuthGuardService } from './services/auth.guard';

export function themeFactory(themeService: ThemeService) {
  return () => themeService.setThemeOnStart();
}

@NgModule({
  imports:      [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    FontAwesomeModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {}),
    EffectsModule.forRoot([AuthEffects])
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    NavbarComponent,
    MenuItemComponent,
    HomePageComponent,
    AboutPageComponent,
    UserPageComponent,
    CompanyPageComponent,
    BreadcrumbComponent,
    SignUpComponent,
    MainLayoutComponent,
    PublicLayoutComponent,
    LoginPageComponent
  ],
  providers: [
    ThemeService,
    AuthService,
    AuthGuardService,
    { provide: APP_INITIALIZER, useFactory: themeFactory, deps: [ThemeService], multi: true},
    { provide: APP_BASE_HREF, useValue: '/' },
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
