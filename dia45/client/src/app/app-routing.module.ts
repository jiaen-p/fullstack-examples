import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VistaDiscoComponent } from './pages/vista-disco/vista-disco.component';
import { FormularioDiscoComponent } from './pages/formulario-disco/formulario-disco.component';


const routes: Routes = [
  {path:"", component:VistaDiscoComponent},
  {path:"formulario", component:FormularioDiscoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
