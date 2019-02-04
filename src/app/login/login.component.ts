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
    this.login();
   }
   login(){
     this.http.post('http://localhost:8000/user',{email:this.email, password:this.password})
     .toPromise()
        .then(res => {
          sessionStorage.setItem('api-token', res.token);
          sessionStorage.setItem('isLoggedin', 'true');
          const userData = { id: res.id, name: res.name };
          sessionStorage.setItem('user', JSON.stringify(userData));
          this.router.navigate(['/sidebar']);
          this.resp=res.json();
          
      })
      .catch(e => {});
   }
>>>>>>> 2266488999d9cfe4ce871f17985f0aaea3b10b19

  ngOnInit() {
  }
 
}
