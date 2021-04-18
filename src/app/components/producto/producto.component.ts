import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Producto } from '../../models/producto.models';
import { ProductoSolicitado } from '../../models/pedido.model';
import Swal from 'sweetalert2';

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
    const Toast = Swal.mixin({
      toast: true,
      showDenyButton: true,
      confirmButtonText: `Agregar`,
      denyButtonText: `No agregar`,
    })
    Toast.fire({
      title: 'Desea agregar el producto en el carro?',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        console.log("Producto " + this.producto.nombre + " agregado")
        this.emitirProductoSolicitado.emit(new ProductoSolicitado(this.producto,this.cantidad))
        this.cantidad=1;
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 1800,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({
          icon: 'success',
          title: 'Se registro el producto en el carro'
        })
      } else if (result.isDenied) {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({
          icon: 'info',
          title: 'No se registro el producto en el carro'
        })
      }
    })
  }
}
