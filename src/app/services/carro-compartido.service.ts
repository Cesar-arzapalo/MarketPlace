import { Injectable } from '@angular/core';
import { Pedido } from '../models/pedido.model';

@Injectable({
  providedIn: 'root'
})
export class CarroCompartidoService {
  carro:Pedido
  constructor() {
    this.carro= new Pedido(new Date(), [])
   }

   getCarro(){
     return this.carro;
   }

   getProductosCarro(){
     return this.carro.productos;
   }

}
