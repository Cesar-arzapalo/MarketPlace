import { Component, Input, OnInit } from '@angular/core';
import { Producto } from '../../models/producto.models';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  @Input() producto!: Producto;
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
    
  }
}
