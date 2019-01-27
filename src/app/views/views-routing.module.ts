import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewsComponent } from "./views.component";
const routes: Routes = [
  {
    path: "",
    component: ViewsComponent,
    children: [
      {
        path: "",
        redirectTo: "perfil"
      },
      {
        path: "perfil",
        loadChildren: "./perfil/perfil.module#PerfilModule"
      },
      {
        path: "publicar-ofertas",
        loadChildren: "./publicar-ofertas/publicar-ofertas.module#PublicarOfertasModule"
      },
      {
        path: "buscar-ofertas",
        loadChildren: "./buscar-ofertas/buscar-ofertas.module#BuscarOfertasModule"
      },
      {
        path: "mis-ofertas",
        loadChildren: "./mis-ofertas/mis-ofertas.module#MisOfertasModule"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
