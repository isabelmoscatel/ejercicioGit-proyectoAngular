import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../../utilitarios/modelos/Vehiculo';
import { VehiculoService } from '../../servicios/Vehiculo.service';
import { AbstractControl, FormBuilder,FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-PageVehiculoRegistro',
  templateUrl: './PageVehiculoRegistro.component.html',
  styleUrls: ['./PageVehiculoRegistro.component.css']
})
export class PageVehiculoRegistroComponent implements OnInit {

  //vehiculo?: Vehiculo

  formulario: FormGroup;

  constructor(
    private vehiculoServicio: VehiculoService,
    private formBuilder : FormBuilder

  ) {

    this.formulario = this.formBuilder.group({
      "codigo": ['',[Validators.required]],
      "marca":['',[Validators.required]],
      "modelo":['',[Validators.required]],
      "anio":['',[Validators.required]],
      "color":[],
      "kilometraje":[],
      "precio":[],
      "calificacion":['',[Validators.required]],
      "foto": [],

    })
  }

  ngOnInit() {
  }
  guardar() {
    //this.vehiculoServicio.addVehiculos(this.vehiculo);
  

   if(this.formulario.valid){
    this.vehiculoServicio.insertVehiculo({...this.formulario.value}).subscribe(
      respuesta=>{
        if(respuesta.codigo == "1"){
          Swal.fire({
            title: "Mensaje",
            text: "se grabo con exito",
            icon: "info",
          }).then(res=>{
            this.formulario.reset();
          })
        }else{
          Swal.fire({
            title: "",
            text: "No se pudo registrar el vehiculo" + respuesta.mensaje,
            icon: "error",
          })
        }
      
      }
    )
   
   }else{
    
    Swal.fire({
      
      title: "Mensaje",
      text: "te faltan campos que llenar",
      icon: "error",

    })

   }
   
  }

}

export function validadorCodigo(): ValidatorFn {
  return (control: AbstractControl):ValidationErrors|null=>{
    //console.log(control)
    const codigoV = /^\d{4}$/
    let value = control.value;
    if(codigoV.test(value)){
      return null;
    }
    return {'codigoValidate': true};
  }

}
