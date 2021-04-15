import { Component, Input, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/categoria.model';
import {  Pedido } from '../../models/pedido.model';
import { Router } from '@angular/router';
import { CarroCompartidoService } from '../../services/carro-compartido.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  categorias: Categoria[];
  pedido: Pedido;
  constructor(private router:Router, private carro: CarroCompartidoService) {
    this.categorias=[{nombre:"Abarrotes", id:1}, {nombre:"Electrodomesticos", id:2}, {nombre:"Tecnología", id:3}, {nombre:"Limpieza", id:4},{nombre:"Libros", id:5},{nombre:"Organizadores", id:6},{nombre:"Utiles escolares", id:7},{nombre:"Higiene y aseo", id:8},{nombre:"Deportes", id:9}]
    this.pedido = new Pedido(new Date(),[])
  }

  ngOnInit(): void {
    
  }
  navegar(){
    this.router.navigateByUrl("/venta")
  }
  actualizarCarro(){
    this.pedido.productos = CarroCompartidoService.getProductosCarro();
    console.log(CarroCompartidoService.getCarro(),CarroCompartidoService.getProductosCarro,"LADO MENU")
    console.log(this.pedido)
  }

}
