import { Component, OnInit } from '@angular/core';
import { CarroCompartidoService } from '../../services/carro-compartido.service';
import { Pedido, PedidoDB, ProductoSolicitado, ProductoSolicitadoDB } from '../../models/pedido.model';
import { CorreoService } from '../../services/correo.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import html2canvas from "html2canvas";
import { PedidoService } from '../../services/pedido.service';
import { ProductoService } from '../../services/producto.service';
import { Producto } from 'src/app/models/producto.models';
import { Mensaje } from '../../models/mensaje.model';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-comprobante',
  templateUrl: './comprobante.component.html',
  styleUrls: ['./comprobante.component.css']
})
export class ComprobanteComponent implements OnInit {
  mensaje!: Mensaje;
  pedido!: Pedido;
  monto: number = 0;
  comprobante: any;
  pedidoCargado: boolean = false;
  constructor(private actRouter: ActivatedRoute, public router: Router,private auth: AuthService,
              private productoService:ProductoService,private pedidoService:PedidoService, public correoService: CorreoService) {
    this.generarPedido(<string>this.actRouter.snapshot.params.id)!;
    
  }

  ngOnInit(): void {
    
  }

  generarMensaje(){
    
  }
  generarProductosSolicitados(productosSolicitadosDB: ProductoSolicitadoDB[]): ProductoSolicitado[]{
      let productoSolicitado: ProductoSolicitado[] = [];
      productosSolicitadosDB.map(productoSolicitadoDB => {
        console.log(productoSolicitadoDB)
        this.productoService.cargarProducto(productoSolicitadoDB.productoReferencia).subscribe(producto =>{
          this.monto+=producto.data()?.precioUnidad!*productoSolicitadoDB.cantidad;
          productoSolicitado.push(new ProductoSolicitado(
            new Producto(productoSolicitadoDB.productoReferencia,producto.data()!.nombre,producto.data()!.descripcion,producto.data()!.valoracion,producto.data()!.visitas,
            producto.data()!.idProveedor,producto.data()!.idCategoria,producto.data()!.stock,producto.data()!.precioUnidad,producto.data()!.medida,
            producto.data()!.unidad,producto.data()!.imagenesRefereciales,producto.data()!.caracteristicas),productoSolicitadoDB.cantidad))
        })
      })
      return productoSolicitado;
  }
  
  generarPedido(id:string){
    this.pedidoService.cargarPedido(id).subscribe(pedidoDB  =>{
      this.pedido = new Pedido(pedidoDB.data()!.fechaEmision, this.generarProductosSolicitados(<ProductoSolicitadoDB[]>pedidoDB.data()!.productosReferencia))
      
      this.pedidoCargado=true;
      this.auth.user$.subscribe(perfil =>{
        this.mensaje= new Mensaje(pedidoDB.data()!.usuario,(perfil)?(perfil?.email!):"","Gracias por Comprar en EMARK - Comprobante Electronico",`https://e-mark.herokuapp.com${this.router.url}`)
      })
    });
    
  }

  async crearComprobante(){
    
    html2canvas(  <HTMLCanvasElement> document.querySelector("#comprobante")!).then(canvas => {
      this.comprobante = canvas.toDataURL();
      this.realizarDescarga(this.comprobante)      
    }).catch(err =>{
      console.error(err.error)
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
        icon: 'error',
        title: (err.error)
      })
    });
  }

  realizarDescarga(comprobante: any){
    var archivo = document.createElement('a')
    archivo.href=comprobante;
    archivo.download = "Comprobante Electronico.png"
    archivo.click();
  }

  async descargarComprobante(){
    const Toast = Swal.mixin({
      title: ('Descargando comprobante'),
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timerProgressBar: true
    })

    await this.crearComprobante()
    const Toast2 = Swal.mixin({
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
      title: (`Se descargo el comprobante`)
    })

  }


  crearAsunto(){

  }
  async enviarCorreo(){

    const Toast = Swal.mixin({
      toast: true,
      title: 'Envio de comprobante',
      input: 'email',
    })
    const { value: email} = await Toast.fire({
      inputValue: this.mensaje.correo,
      inputLabel: 'Correo electronico:',
      inputPlaceholder: 'Ingrese un correo'
    })
    
    if (email) {
      const Toast = Swal.mixin({
        title: ('Verificando envio'),
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timerProgressBar: true
      })
      Toast.isLoading()
      //await this.crearComprobante()
      this.crearAsunto();
      this.correoService.enviarCorreo('sistemas_distribuidos',email,this.mensaje.usuario,this.mensaje.asunto,this.mensaje.mensaje).toPromise().then( mns => {
        console.log(mns);
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
          title: (`Se envio el comprobante al correo: ${email}`)
        })
      }).catch(err => {
        console.error(err.error)
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
          icon: 'error',
          title: (err.error)
        })
      })
    }
  }

}
