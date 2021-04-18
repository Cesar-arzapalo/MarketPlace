import { Component, OnInit } from '@angular/core';
import { Caracteristica } from 'src/app/models/producto.models';
import { CaracteristicaService } from 'src/app/services/caracteristica.service';
//import { Certificate } from 'crypto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css'],
})
export class DetalleProductoComponent implements OnInit {
  nombre: string;
  descripcion: string;
  precio: number;
  caracteristicas: Array<string>;
  caracteristicas_reales: Array<Caracteristica>;
  fotos_pequenas: Array<string>;
  foto_grande: string;

  constructor(private detalle: ProductoService, private caracteristicaService:CaracteristicaService) {
    this.nombre = '';
    this.descripcion = '';
    this.precio = 0;
    this.caracteristicas = [];
    this.caracteristicas_reales = [];
    this.fotos_pequenas = [];
    this.foto_grande = '';
    this.obtener_producto();
  }

  ngOnInit(): void {}

  async obtener_producto() {
     this.detalle
      .cargarProducto('e9Qz7MCujkhVortJek42')
      .subscribe((caracteristica) => {
        console.log(caracteristica.data());
        const data=caracteristica.data()!
        this.nombre =  data.nombre;
        this.descripcion = data.descripcion;
        this.precio = data.precioUnidad;
        this.caracteristicas = data.caracteristicas;
        this.fotos_pequenas = data.imagenesRefereciales;
        this.foto_grande = this.fotos_pequenas[0];
        //return caracteristica.data();
        this.obtener_caracteristicas(this.caracteristicas)
      });
      
  }

  obtener_caracteristicas(caracteristicas:Array<string>){
    let result:Array<Caracteristica>=[]
    console.log("angel")
    caracteristicas.map((c:string)=>{
      this.caracteristicaService.cargarCaracteristica(c).subscribe(caracteristica => {
            console.log(caracteristica.data());
            result.push(caracteristica.data()!)
          });
    })
  this.caracteristicas_reales=result

  }
}
