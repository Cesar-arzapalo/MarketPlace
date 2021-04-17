import { Component, OnInit } from '@angular/core';
import { Certificate } from 'crypto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {

  constructor(private detalle:ProductoService) { 
    this.obtener_producto()
  }

  ngOnInit(): void {
  }
  
  obtener_producto(){
    console.log(this.detalle.cargarProducto("5").subscribe())

  }


}
