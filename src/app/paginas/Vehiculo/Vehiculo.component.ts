import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../../utilitarios/modelos/Vehiculo';
import { ActivatedRoute } from '@angular/router';
import { VehiculoService } from '../../servicios/Vehiculo.service';

@Component({
  selector: 'app-Vehiculo',
  templateUrl: './Vehiculo.component.html',
  styleUrls: ['./Vehiculo.component.css']
})
export class VehiculoComponent implements OnInit {

  vehiculo?: Vehiculo = {
    codigo: "001",
    marca: "Chevrolet",
    modelo: "Aveo",
    color: "Rojo",
    kilometraje: "2000",
    precio: 15000,
    foto: "https://http2.mlstatic.com/D_NQ_NP_833233-MLA74573566365_022024-O.webp",
    anio: 2002,
    calificacion: 5,
  }
  constructor(
    private route: ActivatedRoute,
    private vehiculosService: VehiculoService
  ) {

  }

  ngOnInit() {
    /*this.route.params.subscribe(params => {
     
      this.vehiculo =  this.vehiculosService.getVehiculo(params['codigo']);
    })*/

    this.route.params.subscribe(params => {
     
     this.vehiculosService.getVehiculo(params['codigo']).subscribe(data=>{
      if(data.codigo == "1"){
        this.vehiculo = data.data;
      }
      
     })
    })
  }


}
