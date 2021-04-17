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
  
  public  fontModal = true
  public categorias= [
    { 
        id: 1,
        nombre: 'Bodegas',
        hijos: [
            { 
                id: 11, 
                nombre: 'frutas',
                hijos: [
                    { id: 111, nombre: 'frutas duces' },
                    { id: 112, nombre: 'frutas semidulces' },
                    { id: 113, nombre: 'frutas acidas' },
                    { id: 114, nombre: 'frutas semiacidas' },
                    { id: 114, nombre: 'frutas neutras' },
                ]
            },
            { id: 12, nombre:'verduras'},
            { id: 13, nombre:'menestras'},
            { id: 14, nombre:'tuberculos'},
        ],
    },
    { id: 2, nombre: 'Abarrotes'},
    { id: 3, nombre: 'Electrodomesticos'},
    { id: 4, nombre: 'Tecnología'},
    { id: 5, nombre: 'Limpieza'},
    { id: 6, nombre: 'Libros'},
    { id: 7, nombre: 'Organizadores'},
    { id: 8, nombre: 'Utiles escolares'},
    { id: 9, nombre: 'Higiene y aseo'},
    { id: 10, nombre: 'Deportes'},
    { id: 11, nombre: 'Frutas y verduras'},
    { id: 12, nombre: 'Frutas y verduras'},
    { id: 13, nombre: 'Frutas y verduras'},
    { id: 14, nombre: 'Frutas y verduras'},
    { id: 15, nombre: 'Frutas y verduras'},
  ];

  pedido: Pedido;
  constructor(private router:Router, private carro: CarroCompartidoService) {
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
