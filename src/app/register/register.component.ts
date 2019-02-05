import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  mensaje : string = '';


  email='';
  name='';
  surname='';
  identification_card='';
  description='';
  telephone='';
  password='';

  resp=[];


  constructor(private http : Http) {
    this.registrar();
   }

   registrar(){
    this.http.post("http://localhost:8000/register",{email:this.email, 
    name:this.name, 
    surname:this.surname, 
    identification_card:this.identification_card, 
    description:this.description, 
    telephone:this.telephone, 
    password:this.password })
      .toPromise()
        .then(res => {
        this.resp=res.json();
        this.mensaje = 'Datos guardados exitosamente';
      })
      .catch(e => {});
      
   }

  ngOnInit() {
  }
  closeAlert():void{
    this.mensaje = '';
  }
}
