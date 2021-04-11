import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css']
})
export class VentaComponent implements OnInit {
  pagina: string;
  constructor() {
    this.pagina="tipo-recepcion";
   }

  ngOnInit(): void {
  }

}
