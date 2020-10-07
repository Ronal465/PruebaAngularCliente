import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdministrativaComponent } from "./components/administrativa/administrativa.component";
import { InicioComponent } from "./components/inicio/inicio.component";
import { PublicaComponent } from "./components/publica/publica.component";
import {RentarPeliculasComponent  } from "./components/rentar-peliculas/rentar-peliculas.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/Inicio',
    pathMatch: 'full'
  },
  {
    path: 'Administracion',
    component: AdministrativaComponent
  },
  {
    path: 'Inicio',
    component: InicioComponent
  },
  {
    path: 'Publica',
    component: PublicaComponent
  },
  {
    path: 'RentarPelicula',
    component: RentarPeliculasComponent
  },
  {
    path: '**',
    component: InicioComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
