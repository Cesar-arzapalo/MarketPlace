import { Injectable } from '@angular/core';
import { Pedido } from '../models/pedido.model';

@Injectable({
  providedIn: 'root'
})
export class CarroCompartidoService {
  static carro:Pedido = new Pedido(new Date(), [])
  constructor() {
   }

   static getCarro(){
     return CarroCompartidoService.carro;
   }

   static getProductosCarro(){
     return CarroCompartidoService.carro.productos;
   }

}
