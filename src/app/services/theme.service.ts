import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export enum ThemeMode {
  DARK,
  LIGHT
}

@Injectable()
export class ThemeService {
  theme$ = new BehaviorSubject<ThemeMode>(ThemeMode.LIGHT);
  
  private readonly THEME_KEY = "THEME";
  private readonly DARK_THEME_VALUE = "DARK";
  private readonly LIGHT_THEME_VALUE = "LIGHT";
  private readonly DARK_THEME_CLASS_NAME = "theme-dark";
  private _darkThemeSelected = false;

  constructor() { }

  setThemeOnStart() {
    if (this.isDarkThemeSelected()) {
      this.setDarkTheme();
    } else {
      this.setLigthTheme();
    }

    setTimeout(() => {
      document.body.classList.add('animate-colors-transition');
    }, 500)
  }

  toogle() {
    if (this._darkThemeSelected) {
      this.setLigthTheme();
    } else {
      this.setDarkTheme();
      console.log('set darkmode');
    }
  }

  private isDarkThemeSelected(): boolean {
    this._darkThemeSelected = localStorage.getItem(this.THEME_KEY) === this.DARK_THEME_VALUE;
    return this._darkThemeSelected;
  }

  private setLigthTheme() {
    localStorage.setItem(this.THEME_KEY, this.LIGHT_THEME_VALUE);
    document.body.classList.remove(this.DARK_THEME_CLASS_NAME);
    this._darkThemeSelected = false;
    this.theme$.next(ThemeMode.LIGHT);
  }

  private setDarkTheme() {
    localStorage.setItem(this.THEME_KEY, this.DARK_THEME_VALUE);
    document.body.classList.add(this.DARK_THEME_CLASS_NAME);
    this._darkThemeSelected = true;
    this.theme$.next(ThemeMode.DARK);
  }
  
}