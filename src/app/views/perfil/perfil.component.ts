import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import swal from 'sweetalert';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(private modalService: NgbModal,public router: Router, public authDataServise: AuthService) { }

  ngOnInit() {
  }
  open(content) {
    this.modalService.open(content);
  }
}
