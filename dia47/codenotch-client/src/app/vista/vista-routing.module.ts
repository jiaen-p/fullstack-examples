import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VistaPage } from './vista.page';

const routes: Routes = [
  {
    path: '',
    component: VistaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VistaPageRoutingModule {}
