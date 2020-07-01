import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CiudadesComponent } from './pages/ciudades/ciudades.component';
import { TemperaturaConverterPipe } from './pipes/temperatura-converter.pipe';
import { VistaNuevoComponent } from './pages/vista-nuevo/vista-nuevo.component';
import { VistaDetalleComponent } from './pages/vista-detalle/vista-detalle.component';
import { VistaListadoTablaComponent } from './pages/vista-listado-tabla/vista-listado-tabla.component';

@NgModule({
  declarations: [
    AppComponent,
    CiudadesComponent,
    TemperaturaConverterPipe,
    VistaNuevoComponent,
    VistaDetalleComponent,
    VistaListadoTablaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
