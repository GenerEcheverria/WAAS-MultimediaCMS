import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { SitiosComponent } from './pages/sitios/sitios.component';
import { SuperAdminSitiosComponent } from "./pages/super-admin-sitios/super-admin-sitios.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'sitios', component:  SitiosComponent},
      { path: 'sasitios', component: SuperAdminSitiosComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
