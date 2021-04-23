import { Component, OnInit } from '@angular/core';
import { Caracteristica } from 'src/app/models/producto.models';
import { CaracteristicaService } from 'src/app/services/caracteristica.service';
//import { Certificate } from 'crypto';
import { ProductoService } from 'src/app/services/producto.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Producto } from '../../models/producto.models';
import { CarroCompartidoService } from '../../services/carro-compartido.service';
import { ProductoSolicitado } from 'src/app/models/pedido.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css'],
})
export class DetalleProductoComponent implements OnInit {
  producto?: Producto;
  caracteristicas: Caracteristica[]=[];
  caracteristicasCargadas:boolean =false;
  productoCargado: boolean = false
  imagenActual:string=""
  idProductoSeleccionado=1;
  cantidad: number;
  constructor(private detalle: ProductoService, private caracteristicaService:CaracteristicaService, private router : ActivatedRoute) {
    this.cantidad = 1;
  }

  ngOnInit(): void {

    this.obtener_producto();
  }

  obtener_producto() {
     this.detalle
      .cargarProducto(this.router.snapshot.paramMap.get("id")!)
      .subscribe(async (producto) => {
        this.producto=producto.data();
        this.producto!.id=this.router.snapshot.paramMap.get("id")!;
        console.log(this.producto);
        this.imagenActual=this.producto?.imagenesRefereciales[0]!;
        this.productoCargado=true;
        this.caracteristicas = await this.obtener_caracteristicas(this.producto?.caracteristicas!);
        console.log(this.caracteristicas)
      });
      
  }

  async obtener_caracteristicas(caracteristicas:string[]): Promise<Caracteristica[]>{
    let caracteristicasArray:Caracteristica[]=[]
    caracteristicas.map((caracteristica:string)=>{
      this.caracteristicaService.cargarCaracteristica(caracteristica).subscribe(caracteristicaSubscrita => {
            caracteristicasArray.push(caracteristicaSubscrita.data()!)
            this.caracteristicasCargadas = true;
            console.log(caracteristicasArray)
          });
    })
    return caracteristicasArray
  }

  actualizarImagenSeleccionada = (idx:number) => {
      this.idProductoSeleccionado = idx
      this.imagenActual = this.producto!.imagenesRefereciales[idx-1]
  }
  public aumentar = () => {
    this.cantidad = (this.cantidad < this.producto!.stock) ? this.cantidad + 1 : this.cantidad;
    console.log(this.cantidad);
  };

  public disminuir = () => {
    this.cantidad = (this.cantidad > 1) ? this.cantidad - 1 : this.cantidad;
    console.log(this.cantidad);
  };

  public agregar = () => {
    console.log("Producto " + this.producto!.nombre + " agregado")
    let registro = true;
    CarroCompartidoService.getCarro().productos.map( p => {if ( p.producto.id == this.producto!.id) registro = false})
    CarroCompartidoService.getCarro().productos=CarroCompartidoService.getCarro().productos.filter( p => p.producto.id!= this.producto!.id)
    CarroCompartidoService.getCarro().productos.push(new ProductoSolicitado(this.producto!,this.cantidad))
    CarroCompartidoService.actualizarMonto();
    this.cantidad = 1;
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
      title: `Se ${registro?"registro":"actualizo"} el producto en el carro`
    })
  }
}
