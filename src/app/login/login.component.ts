import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    email='';
    password='';
    resp=[];

  constructor(public router: Router, private http : Http) {
    
   }
   login(){
     this.http.post('http://localhost:8000/login',{email:this.email, password:this.password})
     .toPromise()
        .then(res => {
        
          this.resp=res.json();
          this.router.navigate(['/perfil'])
          console.log("Hola");
      })
      .catch(e => {
        this.router.navigate(['/login'])
        console.log("error");
      });
   }

  ngOnInit() {
  }
 
}
