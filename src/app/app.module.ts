import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagListaVehiculosComponent } from './paginas/pag-lista-vehiculos/pag-lista-vehiculos.component';
import { PageModule } from './paginas/PageModule';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { UserInterceptorService } from './interceptores/UserInterceptor.service';



@NgModule({
  declarations: [
    AppComponent,
  // PagListaVehiculosComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PageModule,
    HttpClientModule,
    

    
  ],
  providers: [
   {provide: HTTP_INTERCEPTORS, useClass: UserInterceptorService, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
