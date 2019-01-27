import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-buscar-ofertas',
  templateUrl: './buscar-ofertas.component.html',
  styleUrls: ['./buscar-ofertas.component.css']
})
export class BuscarOfertasComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }
  open(content) {
    this.modalService.open(content);
  }
}
