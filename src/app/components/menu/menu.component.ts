import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/categoria.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  categorias: Categoria[];
  constructor() {
    this.categorias=[{nombre:"Abarrotes", id:1}, {nombre:"Electrodomesticos", id:2}, {nombre:"Tecnología", id:3}, {nombre:"Limpieza", id:4},{nombre:"Libros", id:5},{nombre:"Organizadores", id:6},{nombre:"Utiles escolares", id:7},{nombre:"Higiene y aseo", id:8},{nombre:"Deportes", id:9}]
  }

  ngOnInit(): void {
    
  }

}
