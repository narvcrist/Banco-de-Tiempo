import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuscarOfertasRoutingModule } from './buscar-ofertas-routing.module';
import { BuscarOfertasComponent } from './buscar-ofertas.component';

@NgModule({
  declarations: [BuscarOfertasComponent],
  imports: [
    CommonModule,
    BuscarOfertasRoutingModule
  ]
})
export class BuscarOfertasModule { }
