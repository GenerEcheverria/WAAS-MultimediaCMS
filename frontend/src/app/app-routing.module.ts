import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { SitiosComponent } from './pages/sitios/sitios.component';
import { CrearSitioComponent } from './pages/crear-sitio/crear-sitio.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'sitios', component:  SitiosComponent},
      { path: 'crear', component: CrearSitioComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
