import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { SitiosComponent } from './pages/sitios/sitios.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { MenuOptionComponent } from './shared/buttons/menu-option/menu-option.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BodyElementComponent } from './pages/crear-sitio/body-element/body-element.component';
import { TextComponent } from './pages/crear-sitio/media-types/text/text.component';
import { ImageComponent } from './pages/crear-sitio/media-types/image/image.component';
import { VideoComponent } from './pages/crear-sitio/media-types/video/video.component';
import { CrearSitioComponent } from './pages/crear-sitio/crear-sitio.component';
import { SimpleFooterComponent } from './pages/crear-sitio/footers/simple-footer/simple-footer.component';
import { RegularFooterComponent } from './pages/crear-sitio/footers/regular-footer/regular-footer.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
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
    SimpleFooterComponent,
    RegularFooterComponent,

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
