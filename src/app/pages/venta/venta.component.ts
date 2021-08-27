import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarroCompartidoService } from '../../services/carro-compartido.service';
import { Pedido } from '../../models/pedido.model';
import { CorreoService } from '../../services/correo.service';
import { FormControl, FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

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


  constructor(private router: Router, private correoService: CorreoService,private fb :FormBuilder) {
    this.pagina="tipo de recepcion";
    this.idPagina=1;
    this.paginacion=[{id:1,nombre:"tipo de recepcion"},{id:2,nombre:"tipo de entrega"}
    ,{id:3,nombre:"metodo de pago"},{id:4,nombre:"finalizar venta"}]
    this.pedido=CarroCompartidoService.carro;
    this.formPedido=fb.group({
      recepcionForm:[,Validators.required],
      entregaForm:[,Validators.required],
      ventaForm:[,Validators.required]
    })
    console.log(this.pedido)
    correoService.enviarCorreo("rousseau.arca@gmail.com","User","Envio de boleta de pago - Emark","Gracias por comprar en Emark")
   }

  ngOnInit(): void {
    this.crearListener()
  }

  crearListener(){
    this.formPedido.valueChanges.subscribe((valor) => {
      console.log(valor, this.formPedido);
    })

    this.formPedido.statusChanges.subscribe((status) => {
      console.log({status},status)
      if(status == "VALID"){
        console.log("pedido valido")
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

  finalizarCompra(){
    this.router.navigateByUrl(`/comprobante/${0}`)
  }

  obtenerPaginacion(id:number):string{
    var nombre:string=""
    this.paginacion.map(pag => { if (pag.id ===id) nombre= pag.nombre});
    return nombre;
  }

  actualizarForm(form: FormGroup, idx: number){
    console.log("holi desde ventas")
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
