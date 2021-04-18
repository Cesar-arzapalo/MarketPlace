import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarroCompartidoService } from '../../services/carro-compartido.service';
import { Pedido } from '../../models/pedido.model';
import { CorreoService } from '../../services/correo.service';

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
  monto: Number = CarroCompartidoService.getMonto();


  constructor(private router: Router, private correoService: CorreoService) {
    this.pagina="tipo de recepcion";
    this.idPagina=1;
    this.paginacion=[{id:1,nombre:"tipo de recepcion"},{id:2,nombre:"tipo de entrega"}
    ,{id:3,nombre:"metodo de pago"},{id:4,nombre:"finalizar venta"}]
    this.pedido=CarroCompartidoService.carro;
    console.log(this.pedido)
    correoService.enviarCorreo("minorin.sayakan@gmail.com","User","Envio de boleta de pago - Emark","Gracias por comprar en Emark")
   }

  ngOnInit(): void {
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
    
  }

  finalizarCompra(){
    this.router.navigateByUrl(`/comprobante/${0}`)
  }

  obtenerPaginacion(id:number):string{
    var nombre:string=""
    this.paginacion.map(pag => { if (pag.id ===id) nombre= pag.nombre});
    console.log(nombre)
    return nombre;
  }

}
