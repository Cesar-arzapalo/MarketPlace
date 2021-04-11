import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tipo-entrega',
  templateUrl: './tipo-entrega.component.html',
  styleUrls: ['./tipo-entrega.component.css']
})
export class TipoEntregaComponent implements OnInit {
  opcionesTipoEntrega:string[]; 
  constructor() { 
    this.opcionesTipoEntrega=["Entrega a domicilio","Entrega en puntos autorizados"]
  }

  ngOnInit(): void {
  }

}
