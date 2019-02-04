import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MisOfertasRoutingModule } from './mis-ofertas-routing.module';
import { MisOfertasComponent } from './mis-ofertas.component';

@NgModule({
  declarations: [MisOfertasComponent],
  imports: [
    CommonModule,
    MisOfertasRoutingModule
  ]
})
export class MisOfertasModule { }
