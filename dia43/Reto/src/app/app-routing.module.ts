import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { VistaClaseComponent } from './pages/vista-clase/vista-clase.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';


const routes: Routes = [
  {path:"", component:VistaClaseComponent},
  {path:"formulario", component:FormularioComponent},
  {path:"**", component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
