import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Categoria } from 'src/app/models/categoria.model';
import { ProductoService } from 'src/app/services/producto.service';
import { Producto } from '../../models/producto.models';
import { ProductoSolicitado } from '../../models/pedido.model';
import { CarroCompartidoService } from '../../services/carro-compartido.service';

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

  constructor(
    private productosServices: ProductoService, 
    private carroService: CarroCompartidoService) 
    { 
    this.categoriaActual= new Categoria("Energizantes",[]);
    this.categoriasHijas = [];
    this.opciones = ["Marca","Presentacion","Contenido","Procedencia","Rango de precios"]
    this.productos = []
    this.obtenerProductos()
  }

  ngOnInit(): void {
  }

  obtenerProductos(){
    this.productosServices.cargarProductos().subscribe( () =>{
      var productos: Producto[]=this.productosServices.productos
      this.productos=productos;
    })
  }

  agregarProductoSoilicitado(product:ProductoSolicitado){
    CarroCompartidoService.getCarro().productos=CarroCompartidoService.getCarro().productos.filter( p => p.producto.nombre!= product.producto.nombre)
    CarroCompartidoService.getCarro().productos.push(product)
    console.log(CarroCompartidoService.getCarro());
  }


}
