import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina-registro-clientes',
  templateUrl: './pagina-registro-clientes.component.html',
  styleUrls: ['./pagina-registro-clientes.component.css']
})
export class PaginaRegistroClientesComponent implements OnInit {

  tituloPagina = "Registro del Cliente";
  cliente = { nombre: "", password: "", telefono: "", email: "" };
  quiereContacto: boolean = false;
 
  constructor(private _router: Router,) { }
 
  ngOnInit(): void {
  }
 
  goInicio(): void {
   this._router.navigate([ '/inicio' ]);
  }
 
  registra(): void {
   alert( "En construccion" );
   this._router.navigate( ["/autos"] );
  }

}
