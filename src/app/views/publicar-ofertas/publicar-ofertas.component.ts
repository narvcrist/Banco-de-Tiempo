import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-publicar-ofertas',
  templateUrl: './publicar-ofertas.component.html',
  styleUrls: ['./publicar-ofertas.component.css']
})
export class PublicarOfertasComponent implements OnInit {

  mensaje : string = '';
  ofertas = [
    
    
  ];

  model : any = {};
  model2 : any = {};

  addOferta():void{
    this.ofertas.push(this.model);
    this.mensaje = 'Publicación exitosa';
  }
  myVariable;
  editarOferta(i):void{
    this.model2.titulo = this.ofertas[i].titulo;
    this.model2.descripcion = this.ofertas[i].descripcion;
    this.myVariable = i;
  }
  eliminarOferta(i):void{
    
    if(true){
      this.ofertas.splice(i, 1);
      this.mensaje = 'Publicación eliminada';
    }

  }
  actualizarOferta():void{
    let i = this.myVariable;
    for(let j = 0; j < this.ofertas.length; j++){
      if( i == j){
        this.ofertas[i] = this.model2;
        this.mensaje = 'Publicación actualizada';
        this.model2 = {};
      }
    }

  }
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }
  open(content) {
    this.modalService.open(content);
  }
  closeAlert():void{
    this.mensaje = '';
  }
}