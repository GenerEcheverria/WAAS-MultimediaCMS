import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MiCuentaComponent } from "./pages/mi-cuenta/mi-cuenta.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'mi-cuenta', component: MiCuentaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
