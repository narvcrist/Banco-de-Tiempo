import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicarOfertasRoutingModule } from './publicar-ofertas-routing.module';
import { PublicarOfertasComponent } from './publicar-ofertas.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PublicarOfertasComponent],
  imports: [
    CommonModule,
    PublicarOfertasRoutingModule,
    FormsModule
  ]
})
export class PublicarOfertasModule { }
