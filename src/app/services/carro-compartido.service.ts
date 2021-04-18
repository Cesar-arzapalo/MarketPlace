import { Injectable } from '@angular/core';
import { Pedido } from '../models/pedido.model';

@Injectable({
  providedIn: 'root'
})
export class CarroCompartidoService {
  static carro:Pedido = new Pedido(new Date(), [])
  static monto: Number = 0;
  constructor() {
   }

   static getCarro(){
     return CarroCompartidoService.carro;
   }

   static getProductosCarro(){
     return CarroCompartidoService.carro.productos;
   }
   static actualizarMonto(){
    CarroCompartidoService.monto = CarroCompartidoService.carro.getMontoTotal()
   } 

   static getMonto(){
    return CarroCompartidoService.monto;
  }

}
