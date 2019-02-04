import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewsRoutingModule } from './views-routing.module';
import { ViewsComponent } from './views.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { FooterComponent } from '../components/footer/footer.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [ViewsComponent, NavbarComponent, SidebarComponent, FooterComponent],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    NgbDropdownModule  
  ]
})
export class ViewsModule { }
