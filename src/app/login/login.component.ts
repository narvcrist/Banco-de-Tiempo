import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import { Http } from '@angular/http';
import { Router } from '@angular/router';
>>>>>>> 2266488999d9cfe4ce871f17985f0aaea3b10b19

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

<<<<<<< HEAD
  constructor() { }
=======
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
>>>>>>> 2266488999d9cfe4ce871f17985f0aaea3b10b19

  ngOnInit() {
  }
 
}
