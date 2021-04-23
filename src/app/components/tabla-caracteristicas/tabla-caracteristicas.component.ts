import { Component, Input, OnInit } from '@angular/core';
import { Caracteristica } from 'src/app/models/producto.models';

@Component({
  selector: 'app-tabla-caracteristicas',
  templateUrl: './tabla-caracteristicas.component.html',
  styleUrls: ['./tabla-caracteristicas.component.css']
})
export class TablaCaracteristicasComponent implements OnInit {
  @Input() caracteristicas!: Caracteristica[]
  constructor() { }

  ngOnInit(): void {
    this.caracteristicas.map( (caracteristica,idx) => console.log(caracteristica,idx))
  }

}
