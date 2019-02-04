import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MisOfertasComponent } from './mis-ofertas.component';

const routes: Routes = [
  {
    path: '',
    component: MisOfertasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MisOfertasRoutingModule { }
