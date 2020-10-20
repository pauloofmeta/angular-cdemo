import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { PublicLayoutComponent } from './layouts/public-layout/public-layout.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { CompanyPageComponent } from './pages/company-page/company-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { AuthGuardService } from './services/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'home',
        component: HomePageComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: 'about',
        component: AboutPageComponent,
        canActivate: [AuthGuardService],
        data: {
          breadcrumb: 'Sobre'
        }
      },
      {
        path: 'user',
        component: UserPageComponent,
        canActivate: [AuthGuardService],
        data: {
          breadcrumb: 'Usuários'
        }
      },
      {
        path: 'company',
        component: CompanyPageComponent,
        canActivate: [AuthGuardService],
        data: {
          breadcrumb: 'Empresas'
        }
      },
    ]
  },
  {
    path: '',
    component: PublicLayoutComponent,
    children: [
      {
        path: 'sign-up',
        component: SignUpComponent
      },
      {
        path: 'login',
        component: LoginPageComponent
      }
    ]
  }  
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}