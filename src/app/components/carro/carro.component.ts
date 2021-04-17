import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pedido } from '../../models/pedido.model';
import { CarroCompartidoService } from '../../services/carro-compartido.service';
import { ProductoCarro } from '../../models/producto-carro.model';

@Component({
  selector: 'app-carro',
  templateUrl: './carro.component.html',
  styleUrls: ['./carro.component.css']
})
export class CarroComponent implements OnInit {

  pedido: Pedido;

  constructor(private router:Router) { 
    this.pedido = CarroCompartidoService.getCarro()

  }

  ngOnInit(): void {
  }
  navegar(){
    this.router.navigateByUrl("/venta")
  }
  actualizarCarro(productoCarro: ProductoCarro){
    this.pedido.productos[productoCarro.idProductoCarro]=productoCarro.productoSolicitado;
  }
  obtenerCarro(){
    
  }

}
