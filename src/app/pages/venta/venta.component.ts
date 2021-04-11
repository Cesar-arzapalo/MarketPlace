import { Component, OnInit } from '@angular/core';

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


  constructor() {
    this.pagina="tipo de recepcion";
    this.idPagina=1;
    this.paginacion=[{id:1,nombre:"tipo de recepcion"},{id:2,nombre:"tipo de entrega"}
    ,{id:3,nombre:"metodo de pago"},{id:4,nombre:"finalizar venta"}]
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
    
  }

  obtenerPaginacion(id:number):string{
    var nombre:string=""
    this.paginacion.map(pag => { if (pag.id ===id) nombre= pag.nombre});
    console.log(nombre)
    return nombre;
  }

}
