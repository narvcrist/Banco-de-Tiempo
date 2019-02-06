import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  password: String = '';
  email: String = '';
  busy: Promise<any>;

  constructor(public router: Router, public authDataServise: AuthService) {}
  ngOnInit() {
    this.email = '';
    this.password = '';
  }
   login() {
    this.busy = this.authDataServise.login(this.email, this.password).then( r => {
      if ( r["success"]===true) {

      this.router.navigate(['/perfil']);
    }else {
        swal({
          title: 'Email o Contraseña incorrectas',
          text: 'La dirección de correo proporcionada o contraseña no existen',
          icon: 'error',
        })}}).catch( e => {
      swal({
        title: 'Iniciar Sesión',
        text: 'Credenciales Incorrectos',
        icon: 'error',
      })
      .then( response => {
        sessionStorage.clear();
        this.router.navigate(['/login']);
      });
    });
  }
  
}
