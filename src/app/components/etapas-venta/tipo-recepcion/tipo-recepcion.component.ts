import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tipo-recepcion',
  templateUrl: './tipo-recepcion.component.html',
  styleUrls: ['./tipo-recepcion.component.css']
})
export class TipoRecepcionComponent implements OnInit {
  opcionesTipoRecepcion:string[]; 
  constructor() { 
    this.opcionesTipoRecepcion=["Yo recepciono","Un conocido mio recepciona"]
  }

  ngOnInit(): void {
  }

}
