import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent implements OnInit {

  ruta: String;
  navegacion: Array<String>;
  constructor() { 
    this.ruta = ""
    this.navegacion = ['Inicio']
    this.actualizarNavegacion()
  }

  public actualizarNavegacion = () => {
    this.ruta=""
    this.navegacion.map( (item: String) => this.ruta.concat(item.toString()))
  }

  ngOnInit(): void {
  }

}
