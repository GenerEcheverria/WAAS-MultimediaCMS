import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { TimelineComponent } from './pages/crear-sitio/media-types/timeline/timeline.component';
import { FormsModule } from '@angular/forms';
import { SitiosComponent } from './pages/sitios/sitios.component';
import { CrearSitioComponent } from './pages/crear-sitio/crear-sitio.component';
import { RegisterComponent } from './pages/register/register.component';
import { LienzoPaginaComponent } from './pages/crear-sitio/lienzo-pagina/lienzo-pagina.component';
import { SuperAdminSitiosComponent } from "./pages/super-admin-sitios/super-admin-sitios.component";
import { MiCuentaComponent } from "./pages/mi-cuenta/mi-cuenta.component";
import { SuperadministradorCuentaUsuarioComponent } from './pages/superadministrador-cuenta-usuario/superadministrador-cuenta-usuario.component';

import { MisSitiosComponent } from './pages/mis-sitios/mis-sitios.component';
import { RankingComponent } from './pages/ranking/ranking.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'sitios', component:  SitiosComponent},
      { path: 'crear', component: CrearSitioComponent},
      { path: 'lienzo', component: LienzoPaginaComponent},
      { path: 'sasitios', component: SuperAdminSitiosComponent},
      { path: 'mi-cuenta', component: MiCuentaComponent},
      { path: 'sausuarios', component:  SuperadministradorCuentaUsuarioComponent},
      { path: 'misSitios', component: MisSitiosComponent},
      { path: 'ranking', component: RankingComponent},
      { path: 'sausuarios', component:  SuperadministradorCuentaUsuarioComponent},
      { path: 'ranking', component: RankingComponent}

    ]
  }
];

@NgModule({
  imports: 
  [FormsModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
