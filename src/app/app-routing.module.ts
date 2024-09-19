import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContenidoComponent } from './componente/contenido/contenido.component';
import { DetallesProyectosComponent } from './componente/detalles-proyectos/detalles-proyectos.component';
import { HomePageComponent } from './componente/home-page/home-page.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'perfil', component: ContenidoComponent },
  { path: 'detalles/:url', component: DetallesProyectosComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
