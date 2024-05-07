import { Injectable } from '@angular/core';
import { Respuesta, Vehiculo } from '../utilitarios/modelos/Vehiculo';
import { Observable, map } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  constructor(private http: HttpClient) { }
  baseUrl = "http://www.epico.gob.ec/vehiculo/public/api/"
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': ' application/json'})
  };
  //Get
  getVehiculos(filtro: any): Observable<Vehiculo[]>{
    
    return this.http.get<Respuesta>(this.baseUrl+"vehiculos/").pipe(
      map(respuesta => respuesta.data)
    );
  }

  //Post
  insertVehiculo(vehiculo : Vehiculo){
    
    
    /*
    let body = new HttpParams();
    body = vehiculo.codigo ? body.set('codigo' , vehiculo.codigo) : body;
    body = vehiculo.marca ? body.set('marca' , vehiculo.marca) : body;
    body = vehiculo.modelo ? body.set('modelo' , vehiculo.modelo) : body;
    body = vehiculo.anio? body.set('anio' , vehiculo.anio) : body;
    body = vehiculo.calificacion ? body.set('calificacion ' , vehiculo.calificacion ) : body;
    body = vehiculo.foto ? body.set('foto ' , vehiculo.foto ) : body;
    body = vehiculo.color ? body.set('color ' , vehiculo.color ) : body;
    body = vehiculo.kilometraje ? body.set('kilometraje  ' , vehiculo.kilometraje  ) : body;
    body = vehiculo.precio? body.set('precio ' , vehiculo.precio) : body;
    */
    return this.http.post<Respuesta>(this.baseUrl+"vehiculo/", vehiculo, this.httpOptions);
  }
 

  getVehiculo(codigo:string){
    return this.http.get<Respuesta>(this.baseUrl+"vehiculo/"+codigo)
  }


  actualizarVehiculo(vehiculo: Vehiculo, codigo:string){
    return this.http.put<Respuesta>(this.baseUrl+"vehiculo/"+codigo , vehiculo, this.httpOptions)
  }

  eliminarVehiculo(codigo:string){
    return this.http.delete<Respuesta>(this.baseUrl+"vehiculo/"+codigo)
  }


/*  getVehiculo(codigo: string): Observable<Vehiculo | undefined> {
    const escucha: Observable<Vehiculo | undefined> = new Observable(escuchando => {
      //let vehiculo = this.listaVehiculos.find(ele => ele.codigo === codigo);
      //escuchando.next(vehiculo);
    });
    return escucha;
  }*/

 


  addVehiculos(vehiculo: Vehiculo) {
    //this.listaVehiculos.push(vehiculo);
  }

 

}
