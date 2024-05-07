import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import { PagListaVehiculosComponent } from './paginas/pag-lista-vehiculos/pag-lista-vehiculos.component';
import { PageNotFoundComponent } from './paginas/PageNotFound/PageNotFound.component';
import { VehiculoComponent } from './paginas/Vehiculo/Vehiculo.component';
import { PageVehiculoRegistroComponent } from './paginas/PageVehiculoRegistro/PageVehiculoRegistro.component';
import { PagEditarVehiculoComponent } from './paginas/PagEditarVehiculo/PagEditarVehiculo.component';
import { PaginaRegistroClientesComponent } from './paginas/pagina-registro-clientes/pagina-registro-clientes.component';

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "vehiculos",
    component: PagListaVehiculosComponent
  },
  {
    path: "vehiculo/:codigo",
    component: VehiculoComponent
  },
  {
    path: "editarvehiculo/:codigo",
    component: PagEditarVehiculoComponent
  },
  {
    path: "registro",
    component: PageVehiculoRegistroComponent
  },
  {
    path: "",
    component:HomeComponent,
    pathMatch:'full'
  },

  {
    path: "registroclientes",
    component:PaginaRegistroClientesComponent,
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
