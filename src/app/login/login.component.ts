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

  ngOnInit() {
  }
 
}
