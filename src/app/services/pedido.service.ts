import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection  } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { PedidoDB } from '../models/pedido.model';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  private pedidoColections!: AngularFirestoreCollection<PedidoDB>;


  constructor(private store: AngularFirestore, private authentication: AngularFireAuth) {
   }

  cargarPedido(idPedido:string){
    this.pedidoColections = this.store.collection<PedidoDB>('pedido', ref => ref.orderBy('nombre', 'asc'));
    return this.pedidoColections.doc(idPedido).get();
  }

  agregarPedido(pedido: PedidoDB){    
    this.pedidoColections = this.store.collection<PedidoDB>('pedido', ref => ref.orderBy('nombre', 'asc'));
    return this.pedidoColections.add({
      usuario: pedido.usuario,
      productosReferencia:pedido.productosReferencia,
      fechaEmision: pedido.fechaEmision
    });
  }

}
