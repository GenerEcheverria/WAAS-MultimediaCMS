import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { TimelineComponent } from './pages/crear-sitio/media-types/timeline/timeline.component';
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

import { SuperAdminSitiosComponent } from './pages/super-admin-sitios/super-admin-sitios.component';
import { MisSitiosComponent } from './pages/mis-sitios/mis-sitios.component';
import { RankingComponent } from './pages/ranking/ranking.component';


@NgModule({
  declarations: [
    AppComponent,
    TimelineComponent,
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
    SuperAdminSitiosComponent,
    MisSitiosComponent,
    RankingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
