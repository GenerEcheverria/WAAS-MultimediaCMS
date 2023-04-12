import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { MiCuentaComponent } from './pages/mi-cuenta/mi-cuenta.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { SitiosComponent } from './pages/sitios/sitios.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { MenuOptionComponent } from './shared/buttons/menu-option/menu-option.component';
import { BodyElementComponent } from './pages/crear-sitio/body-element/body-element.component';
import { TextComponent } from './pages/crear-sitio/media-types/text/text.component';
import { ImageComponent } from './pages/crear-sitio/media-types/image/image.component';
import { VideoComponent } from './pages/crear-sitio/media-types/video/video.component';
import { CrearSitioComponent } from './pages/crear-sitio/crear-sitio.component';
import { LienzoPaginaComponent } from './pages/crear-sitio/lienzo-pagina/lienzo-pagina.component';
import { TituloLienzoComponent } from './pages/crear-sitio/lienzo-pagina/titulo-lienzo/titulo-lienzo.component';
import { TextoLienzoComponent } from './pages/crear-sitio/lienzo-pagina/texto-lienzo/texto-lienzo.component';
import { ImagenLienzoComponent } from './pages/crear-sitio/lienzo-pagina/imagen-lienzo/imagen-lienzo.component';
import { ConexionbdLienzoComponent } from './pages/crear-sitio/lienzo-pagina/conexionbd-lienzo/conexionbd-lienzo.component';
import { VideoLienzoComponent } from './pages/crear-sitio/lienzo-pagina/video-lienzo/video-lienzo.component';
import { FooterLienzoComponent } from './pages/crear-sitio/lienzo-pagina/footer-lienzo/footer-lienzo.component';
import { SuperAdminSitiosComponent } from './pages/super-admin-sitios/super-admin-sitios.component';
//Componentes para web usuario

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MiCuentaComponent,
    MainLayoutComponent,
    SitiosComponent,
    HeaderComponent,
    SidebarComponent,
    MenuOptionComponent,
    BodyElementComponent,
    TextComponent,
    ImageComponent,
    VideoComponent,
    CrearSitioComponent,
    LienzoPaginaComponent,
    TituloLienzoComponent,
    TextoLienzoComponent,
    ImagenLienzoComponent,
    ConexionbdLienzoComponent,
    VideoLienzoComponent,
    FooterLienzoComponent,
    SuperAdminSitiosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
