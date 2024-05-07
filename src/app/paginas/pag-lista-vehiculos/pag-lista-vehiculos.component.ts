import { Component, Input, OnInit } from '@angular/core';
import { VehiculoService } from '../../servicios/Vehiculo.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Vehiculo } from '../../utilitarios/modelos/Vehiculo';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pag-lista-vehiculos',
  templateUrl: './pag-lista-vehiculos.component.html',
  styleUrls: ['./pag-lista-vehiculos.component.css']
})
export class PagListaVehiculosComponent implements OnInit {
  mostrarImagen = true;
  // filtro: string = "";
  private _filtro: string = "";

  get filtro() {
    return this._filtro
  }

  set filtro(data: string) {
    this._filtro = data;
    this.listaVehiculos

    this.consultaVehiculos();
  }



  @Input() valor: string = "";
  listaVehiculos: Array<any> = [];

  formulario: FormGroup;

  constructor(
    private vehiculosService: VehiculoService,
    private formBuilder: FormBuilder
  ) {
    this.formulario = this.formBuilder.group({
      "codigo": [],
      "marca": [],
      "modelo": [],
      "anio": [],
      "color": [],
      "kilometraje": [],
      "precio": [],
      "calificacion": []

    })
  }

  ngOnInit() {
    this.consultaVehiculos();

  }
  mostrar() {
    this.mostrarImagen = !this.mostrarImagen;
  }
  recepcion(dato: number) {
    console.log('Dato:', dato)
  }

  consultaVehiculos() {
    this.vehiculosService.getVehiculos(this.filtro).subscribe(data => {
      console.log(data);
      this.listaVehiculos = data;
    });
  }

  eliminar(codigo: string) {
    Swal.fire({
      title: "Estás seguro",
      text: "Esta accion no es reversible",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Si"
    }).then((result) => {
      if (result.isConfirmed) {
        this.vehiculosService.eliminarVehiculo(codigo).subscribe(data=>{
          if(data.codigo == "1"){
            Swal.fire({
              title: "Deleted!",
              text: "El vehiculo fue eliminado con exito",
              icon: "success"
            });
          }else{
            Swal.fire({
              title: "mensaje",
              text: "No se pudo eliminar el vehiculo",
              icon: "success"
            });
          }
        })
        
      }else{
        Swal.fire({
          title: "mensaje",
          text: "Algo anda mal",
          icon: "success"
        });
      }
    });
  }

  /*consultaVehiculos() {
    this.vehiculosService.getVehiculos(this.filtro).subscribe(data => {
      this.listaVehiculos = data;
    });
  }*/


}
