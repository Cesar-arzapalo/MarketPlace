import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent implements OnInit {

  ruta: String;
  navegacion: Array<string>;
  @Output() newItemEvent = new EventEmitter<string>();
  constructor() { 
    this.ruta = ""
    this.navegacion = ['Catalogo']
    this.actualizarNavegacion()
  }

  public actualizarNavegacion = () => {
    this.ruta=""
    this.navegacion.map( (item: String) => this.ruta = this.ruta.concat(item.toString()))
    console.log(this.ruta)
  }

  ngOnInit(): void {
    this.addNewItem()
  }

  addNewItem() {
    this.newItemEvent.emit(this.navegacion[this.navegacion.length-1]);
  }

}
