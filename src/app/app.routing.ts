import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { CompanyPageComponent } from './pages/company-page/company-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'about',
    component: AboutPageComponent,
    data: {
      breadcrumb: 'Sobre'
    }
  },
  {
    path: 'user',
    component: UserPageComponent,
    data: {
      breadcrumb: 'Usuários'
    }
  },
  {
    path: 'company',
    component: CompanyPageComponent,
    data: {
      breadcrumb: 'Empresas'
    }
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