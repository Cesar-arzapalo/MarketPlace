import { Component, Input, OnInit, Output } from '@angular/core';
import { Categoria } from 'src/app/models/categoria.model';
import { Producto } from '../../models/producto.models';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  categoriasHijas: Categoria[];
  @Input() categoriaActual: Categoria;
  productos:Producto[];
  opciones: string[];

  constructor() { 
    this.categoriaActual= new Categoria("Energizantes",0);
    this.categoriasHijas = [];
    this.opciones = ["Marca","Presentacion","Contenido","Procedencia","Rango de precios"]
    this.productos = [
      new Producto(1,"Bebida Energizante Red Bull Lata 250 ml","Red Bull te brinda la energía necesaria para que cumplas",7.8,1,13,7,6.90,[{id:1,data:"https://plazavea.vteximg.com.br/arquivos/ids/346868-1000-1000/1059327001.jpg?v=637292327800700000"}],[]),
      new Producto(2,"Bebida Energizante Red Bull Lata 250 ml","Red Bull te brinda la energía necesaria para que cumplas",7.8,1,13,7,6.90,[{id:1,data:"https://plazavea.vteximg.com.br/arquivos/ids/346868-1000-1000/1059327001.jpg?v=637292327800700000"}],[]),
      new Producto(3,"Bebida Energizante Red Bull Lata 250 ml","Red Bull te brinda la energía necesaria para que cumplas",7.8,1,13,7,6.90,[{id:1,data:"https://plazavea.vteximg.com.br/arquivos/ids/346868-1000-1000/1059327001.jpg?v=637292327800700000"}],[]),
      new Producto(4,"Bebida Energizante Red Bull Lata 250 ml","Red Bull te brinda la energía necesaria para que cumplas",7.8,1,13,7,6.90,[{id:1,data:"https://plazavea.vteximg.com.br/arquivos/ids/346868-1000-1000/1059327001.jpg?v=637292327800700000"}],[]),
      new Producto(5,"Bebida Energizante Red Bull Lata 250 ml","Red Bull te brinda la energía necesaria para que cumplas",7.8,1,13,7,6.90,[{id:1,data:"https://plazavea.vteximg.com.br/arquivos/ids/346868-1000-1000/1059327001.jpg?v=637292327800700000"}],[]),
      new Producto(6,"Bebida Energizante Red Bull Lata 250 ml","Red Bull te brinda la energía necesaria para que cumplas",7.8,1,13,7,6.90,[{id:1,data:"https://plazavea.vteximg.com.br/arquivos/ids/346868-1000-1000/1059327001.jpg?v=637292327800700000"}],[]),
      new Producto(7,"Bebida Energizante Red Bull Lata 250 ml","Red Bull te brinda la energía necesaria para que cumplas",7.8,1,13,7,6.90,[{id:1,data:"https://plazavea.vteximg.com.br/arquivos/ids/346868-1000-1000/1059327001.jpg?v=637292327800700000"}],[])
    ]
  }

  ngOnInit(): void {
  }

}
