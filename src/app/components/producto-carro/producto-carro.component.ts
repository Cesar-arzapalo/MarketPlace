import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductoSolicitado } from '../../models/pedido.model';
import { ProductoCarro } from '../../models/producto-carro.model';

@Component({
  selector: 'app-producto-carro',
  templateUrl: './producto-carro.component.html',
  styleUrls: ['./producto-carro.component.css']
})
export class ProductoCarroComponent implements OnInit {
  @Input() productoSolicitado!: ProductoSolicitado;
  @Input() indice!: number;
  @Output() emitirProductoCarro = new EventEmitter<ProductoCarro>();
  constructor() { 
  }

  ngOnInit(): void {
  }

  public aumentar = () => {
    this.productoSolicitado.cantidad=(this.productoSolicitado.cantidad<this.productoSolicitado.producto.stock)?this.productoSolicitado.cantidad + 1:this.productoSolicitado.cantidad;
  };

  public disminuir = () => {
    this.productoSolicitado.cantidad=(this.productoSolicitado.cantidad>1)?this.productoSolicitado.cantidad - 1:this.productoSolicitado.cantidad;
  };

  public agregar = () => {
    this.emitirProductoCarro.emit(new ProductoCarro(this.productoSolicitado, this.indice))
  }

}
