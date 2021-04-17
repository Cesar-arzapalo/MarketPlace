import { Component, Input, OnInit } from '@angular/core';
import {  Pedido } from '../../models/pedido.model';
import { Router } from '@angular/router';
import { CarroCompartidoService } from '../../services/carro-compartido.service';
import { CategoriaService } from '../../services/categoria.service';
import { CategoriaArbol } from 'src/app/models/categoriaArbol.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  categorias: CategoriaArbol[]=[];
  pedido: Pedido;
  public  fontModal = false;
  
  constructor(private router:Router, private categoriaService:CategoriaService) {
    this.pedido = new Pedido(new Date(),[])
    this.categoriaService.cargarCategorias().subscribe(()=>{
      this.categorias=this.categoriaService.categorias;
    })
  }

  ngOnInit(): void {
    
  }
  navegar(){
    this.router.navigateByUrl("/venta")
  }
  actualizarCarro(){
    this.pedido.productos = CarroCompartidoService.getProductosCarro();
  }

}
