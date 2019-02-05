import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
<<<<<<< HEAD
=======
import { HttpModule } from '@angular/http';
>>>>>>> 2266488999d9cfe4ce871f17985f0aaea3b10b19

@NgModule({
  declarations: [
    AppComponent,  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    NgbModule.forRoot()
=======
    NgbModule.forRoot(),
    HttpModule
>>>>>>> 2266488999d9cfe4ce871f17985f0aaea3b10b19
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
