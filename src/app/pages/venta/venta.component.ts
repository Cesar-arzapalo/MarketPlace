import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarroCompartidoService } from '../../services/carro-compartido.service';
import { Pedido, PedidoDB, ProductoSolicitado, ProductoSolicitadoDB } from '../../models/pedido.model';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { PedidoService } from '../../services/pedido.service';
import { AuthService } from '@auth0/auth0-angular';
import { ProductoService } from 'src/app/services/producto.service';

interface Paginacion{
  id:number;
  nombre:string;
}

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css']
})


export class VentaComponent implements OnInit {
  pagina: string;
  idPagina: number;
  paginacion: Paginacion[];
  pedido: Pedido;
  monto: number = CarroCompartidoService.getMonto();
  formPedido: FormGroup;
  activacion=false;


  constructor(private router: Router,private productoServices: ProductoService, private pedidoService: PedidoService,private fb :FormBuilder,private auth: AuthService) {
    this.pagina="tipo de recepcion";
    this.idPagina=1;
    this.paginacion=[{id:1,nombre:"tipo de recepcion"},{id:2,nombre:"tipo de entrega"}
    ,{id:3,nombre:"metodo de pago"},{id:4,nombre:"finalizar venta"}]
    this.pedido=CarroCompartidoService.carro;
    this.formPedido=this.fb.group({
      recepcionForm:[,Validators.required],
      entregaForm:[,Validators.required],
      ventaForm:[,Validators.required]
    })
   }

  ngOnInit(): void {
    this.crearListener()
  }

  crearListener(){
    this.formPedido.valueChanges.subscribe((valor) => {
    })

    this.formPedido.statusChanges.subscribe((status) => {
      if(status == "VALID"){
      }
    })
  }
  navegar(idPagNav:number,direccion: string){
    switch(idPagNav){
      case 1: this.pagina="tipo de recepcion"; break;
      case 2: this.pagina="tipo de entrega"; break;
      case 3: this.pagina="metodo de pago"; break;
      case 4: this.finalizarCompra();
    }
    switch(direccion){
      case "izquierda": this.idPagina-=1; break;
      case "derecha": this.idPagina+=1; break;
    }

    this.activacion=false;
    
  }

  


  obtenerProductosSolcitadosDB(productosObtenidos: ProductoSolicitado[]):Object[]{
    var productosSolicitadosDB:Object[] = [];
    productosObtenidos.map(productoSolicitado => {
      productosSolicitadosDB.push({productoReferencia: productoSolicitado.producto.id,cantidad: productoSolicitado.cantidad});
    })

    return productosSolicitadosDB;

  }

  finalizarCompra(){
    this.auth.user$.subscribe(perfil => {
      console.log("finalizando compra",perfil)
      var usuario = (perfil)?(perfil?.name):"Invitado";
      this.pedidoService.agregarPedido(new PedidoDB(usuario!,new Date(),this.obtenerProductosSolcitadosDB(this.pedido.productos))).then( ref => {
        this.router.navigateByUrl(`/comprobante/${ref.id}`)
      })
    })
  }

  obtenerPaginacion(id:number):string{
    var nombre:string=""
    this.paginacion.map(pag => { if (pag.id ===id) nombre= pag.nombre});
    return nombre;
  }

  actualizarForm(form: FormGroup, idx: number){
    switch(idx){
      case 0: this.formPedido.get('recepcionForm')?.setValue(form);break;
      case 1: this.formPedido.get('entregaForm')?.setValue(form);break;
      case 2: this.formPedido.get('ventaForm')?.setValue(form);break;
    }
    this.activacion=true

  }

  obtenerForm( idx: number):AbstractControl{
    switch(idx){
      case 0: return this.formPedido.get('recepcionForm')!;
      case 1: return this.formPedido.get('entregaForm')!;;
      case 2: return this.formPedido.get('ventaForm')!;
      default: return this.formPedido.get('ventaForm')!;
    }
  }

}
