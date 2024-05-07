import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'AEspacio'
})
export class AEspacioPipe implements PipeTransform {

  transform(value: string, buscar: string): string {
    const valorReemplazo = " ";
    return value.replaceAll(buscar, valorReemplazo);
  }

}
