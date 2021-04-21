import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoSolicitado } from 'src/app/models/pedido.model';
import { Producto } from 'src/app/models/producto.models';
import { CarroCompartidoService } from 'src/app/services/carro-compartido.service';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  public productos:Producto[] = [];
  public busqueda:string="";
  public load = false;
  constructor(private activatedRoute:ActivatedRoute,
              private productoService:ProductoService) { 

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      this.load=true;
      this.busqueda=params.termino;
      this.obtenerProductoBuscado(params.termino);
      
    })
  }

  obtenerProductoBuscado(termino:string) {
    this.productoService.cargarProductos().subscribe( () => {
      this.productos = this.productoService.productos.filter( prod => prod.nombre.toLowerCase().includes(termino.toLowerCase()));
      this.load=false;
    });
  }

  agregarProductoSoilicitado(product:ProductoSolicitado){
    CarroCompartidoService.getCarro().productos=CarroCompartidoService.getCarro().productos.filter( p => p.producto.nombre!= product.producto.nombre)
    CarroCompartidoService.getCarro().productos.push(product)
    CarroCompartidoService.actualizarMonto();
    console.log(CarroCompartidoService.getCarro());
  }


}
