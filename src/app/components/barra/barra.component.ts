import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html',
  styleUrls: ['./barra.component.css']
})
export class BarraComponent implements OnInit {
  @Input() opciones!:string[];
  @Input() opcionId!:number;
  @Output() opcionEscogidaEmitter : EventEmitter<number>;
  constructor() { 
    this.opcionEscogidaEmitter = new EventEmitter<number>()
  }

  ngOnInit(): void {
  }

  actualizarOpcion(indice: number){
    console.log(indice, this.opcionId)
    this.opcionEscogidaEmitter.emit(indice)
  }
  

}
