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
  montoTotal:Number;

  constructor(private router:Router) { 
    this.pedido = CarroCompartidoService.getCarro()
    this.montoTotal=CarroCompartidoService.getMonto();

  }

  ngOnInit(): void {
  }
  navegar(){
    this.router.navigateByUrl("/venta")
  }
  actualizarCarro(productoCarro: ProductoCarro){
    CarroCompartidoService.getCarro().productos[productoCarro.idProductoCarro]=productoCarro.productoSolicitado;
    this.pedido.productos[productoCarro.idProductoCarro]=productoCarro.productoSolicitado;
    CarroCompartidoService.actualizarMonto();
    this.montoTotal=CarroCompartidoService.getMonto();
  }
  obtenerCarro(){
    this.montoTotal=CarroCompartidoService.getMonto();
  }

}
