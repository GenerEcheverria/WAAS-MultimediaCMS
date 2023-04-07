import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { SitiosComponent } from './pages/sitios/sitios.component';
import { MiCuentaComponent } from "./pages/mi-cuenta/mi-cuenta.component";
import { SuperadministradorCuentaUsuarioComponent } from './pages/superadministrador-cuenta-usuario/superadministrador-cuenta-usuario.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'sitios', component:  SitiosComponent},
      { path: 'mi-cuenta', component: MiCuentaComponent},
      { path: 'sausuarios', component:  SuperadministradorCuentaUsuarioComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
