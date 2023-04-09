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
import { EdicionSitioComponent } from './pages/edicion-sitio/edicion-sitio.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BodyElementComponent } from './pages/edicion-sitio/body-element/body-element.component';
import { TextComponent } from './pages/edicion-sitio/media-types/text/text.component';
import { ImageComponent } from './pages/edicion-sitio/media-types/image/image.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainLayoutComponent,
    SitiosComponent,
    HeaderComponent,
    SidebarComponent,
    MenuOptionComponent,
    EdicionSitioComponent,
    BodyElementComponent,
    TextComponent,
    ImageComponent,

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
