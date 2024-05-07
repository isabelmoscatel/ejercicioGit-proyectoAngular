import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function validadorCodigo(): ValidatorFn {
    return (control: AbstractControl):ValidationErrors|null=>{
      //console.log(control)
      const codigoV = /^[a-zA-Z0-9]{4}$/
      let value = control.value;
      if(codigoV.test(value)){
        return null;
      }
      return {'codigoValidate': true};
    }
  
  }