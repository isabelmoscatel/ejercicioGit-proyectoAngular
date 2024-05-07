import { NgModule } from "@angular/core";
import { PagListaVehiculosComponent } from "./pag-lista-vehiculos/pag-lista-vehiculos.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UtilitariosModule } from "../utilitarios/UtilitariosModule";
import { VehiculoComponent } from "./Vehiculo/Vehiculo.component";
import { RouterModule } from "@angular/router";
import { PageVehiculoRegistroComponent } from "./PageVehiculoRegistro/PageVehiculoRegistro.component";
import { HomeComponent } from "./home/home.component";
import { PagEditarVehiculoComponent } from "./PagEditarVehiculo/PagEditarVehiculo.component";
import { PaginaRegistroClientesComponent } from "./pagina-registro-clientes/pagina-registro-clientes.component";

@NgModule({
    imports: [
     CommonModule,
     FormsModule,
     UtilitariosModule,
     RouterModule,
     ReactiveFormsModule,
     

      
    ],
    declarations: [
    PagListaVehiculosComponent,
    PagEditarVehiculoComponent,
    VehiculoComponent,
    PageVehiculoRegistroComponent,
    HomeComponent,
    PaginaRegistroClientesComponent
        
    ],
    exports:[
    PagListaVehiculosComponent,
    VehiculoComponent,
    PageVehiculoRegistroComponent,
    HomeComponent,
    PagEditarVehiculoComponent,
    PaginaRegistroClientesComponent
    ],
  
    providers: [],

})
export class PageModule{ 
  
}