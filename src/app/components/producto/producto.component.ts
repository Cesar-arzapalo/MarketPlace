import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Producto } from '../../models/producto.models';
import { ProductoSolicitado } from '../../models/pedido.model';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  @Input() producto!: Producto;
  @Output() emitirProductoSolicitado= new EventEmitter<ProductoSolicitado>();
  cantidad: number;
  constructor() { 
    this.cantidad = 1;
  }

  ngOnInit(): void {
  }

  public aumentar = () => {
    this.cantidad=(this.cantidad<this.producto.stock)?this.cantidad + 1:this.cantidad;
    console.log(this.cantidad);
  };

  public disminuir = () => {
    this.cantidad=(this.cantidad>1)?this.cantidad - 1:this.cantidad;
    console.log(this.cantidad);
  };

  public agregar = () => {
    console.log("Producto " + this.producto.nombre + " agregado")
    this.emitirProductoSolicitado.emit(new ProductoSolicitado(this.producto,this.cantidad))
  }
}
