import { Component, OnInit } from '@angular/core';
import { VehiculoService } from '../../servicios/Vehiculo.service';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Vehiculo } from '../../utilitarios/modelos/Vehiculo';
import { ActivatedRoute } from '@angular/router';
import { validadorCodigo } from '../PageVehiculoRegistro/PageVehiculoRegistro.component';

@Component({
  selector: 'app-PagEditarVehiculo',
  templateUrl: './PagEditarVehiculo.component.html',
  styleUrls: ['./PagEditarVehiculo.component.css']
})
export class PagEditarVehiculoComponent implements OnInit {

  formulario: FormGroup;
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
    private vehiculoServicio: VehiculoService,
    private formBuilder: FormBuilder

  ) {
    /*this.vehiculo = {
      codigo: "",
      marca: "",
      modelo: "",
      color: "",
      kilometraje: "",
      precio: 0,
      foto: "",
      anio: 0,
      calificacion: 0

    }*/

    this.formulario = this.formBuilder.group({
      "codigo": ['', [Validators.required]],
      "marca": ['', [Validators.required]],
      "modelo": ['', [Validators.required]],
      "anio": ['', [Validators.required]],
      "color": [],
      "kilometraje": [],
      "precio": [],
      "calificacion": ['', [Validators.required]],
      "foto": [],

    });
    this.formulario.controls['codigo'].disable();
  }

  ngOnInit() {

    this.route.params.subscribe(params => {

      this.vehiculoServicio.getVehiculo(params['codigo']).subscribe(data => {
        if (data.codigo == "1") {
          this.vehiculo = data.data;
          this.formulario.controls['codigo'].setValue(this.vehiculo?.codigo);
          this.formulario.controls['marca'].setValue(this.vehiculo?.marca);
          this.formulario.controls['modelo'].setValue(this.vehiculo?.modelo);
          this.formulario.controls['anio'].setValue(this.vehiculo?.anio);
          this.formulario.controls['color'].setValue(this.vehiculo?.color);
          this.formulario.controls['kilometraje'].setValue(this.vehiculo?.kilometraje);
          this.formulario.controls['precio'].setValue(this.vehiculo?.precio);
          this.formulario.controls['calificacion'].setValue(this.vehiculo?.calificacion);
        } else {
          Swal.fire({
            title: "",
            text: "No se pudo registrar el vehiculo",
            icon: "error",
          })
        }

      })
    })
  }
  guardar() {
    if (this.formulario.valid) {
      this.vehiculoServicio.actualizarVehiculo({ ...this.formulario.value }, this.formulario.controls['codigo'].value).subscribe(data => {
        if (data.codigo == "1") {
          Swal.fire({
            title: "Mensaje",
            text: "se actualizo con exito",
            icon: "info",
          })
        } else {
          Swal.fire({
            title: "",
            text: "No se pudo actualizar el vehiculo",
            icon: "error",
          })
        }
      }
      )
    } else {
      Swal.fire({
        title: "",
        text: "Faltan llenar campos",
        icon: "error",
      })
    }

  }


}



