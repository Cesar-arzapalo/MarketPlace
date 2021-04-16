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
  
  fontModal = false
  public categorias: Categoria[] = [
    { id: 1, nombre: 'Frutas y verduras'},
    { id: 2, nombre: 'Frutas y verduras'},
    { id: 3, nombre: 'Frutas y verduras'},
    { id: 4, nombre: 'Frutas y verduras'},
    { id: 5, nombre: 'Frutas y verduras'},
    { id: 6, nombre: 'Frutas y verduras'},
    { id: 7, nombre: 'Frutas y verduras'},
    { id: 8, nombre: 'Frutas y verduras'},
    { id: 9, nombre: 'Frutas y verduras'},
    { id: 10, nombre: 'Frutas y verduras'},
    { id: 11, nombre: 'Frutas y verduras'},
    { id: 12, nombre: 'Frutas y verduras'},
    { id: 13, nombre: 'Frutas y verduras'},
    { id: 14, nombre: 'Frutas y verduras'},
    { id: 15, nombre: 'Frutas y verduras'},
  ];

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
    this.pedido.productos = this.carro.getProductosCarro();
    console.log(this.carro.getCarro(),this.carro.getProductosCarro,"LADO MENU")
    console.log(this.pedido)
  }

}
