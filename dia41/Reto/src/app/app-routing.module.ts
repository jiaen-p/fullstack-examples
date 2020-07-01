import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CiudadesComponent } from './pages/ciudades/ciudades.component';


const routes: Routes = [
  {path:"", component: CiudadesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
