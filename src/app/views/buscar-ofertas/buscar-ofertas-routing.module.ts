import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuscarOfertasComponent } from './buscar-ofertas.component';

const routes: Routes = [
  {
    path: '',
    component: BuscarOfertasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuscarOfertasRoutingModule { }
