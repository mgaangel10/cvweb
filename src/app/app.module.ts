import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContenidoComponent } from './componente/contenido/contenido.component';
import { NavbarComponent } from './componente/navbar/navbar.component';
import { HomePageComponent } from './componente/home-page/home-page.component';
import { DetallesProyectosComponent } from './componente/detalles-proyectos/detalles-proyectos.component';

@NgModule({
  declarations: [
    AppComponent,
    ContenidoComponent,
    NavbarComponent,
    HomePageComponent,
    DetallesProyectosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
