import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-metodo-pago',
  templateUrl: './metodo-pago.component.html',
  styleUrls: ['./metodo-pago.component.css']
})
export class MetodoPagoComponent implements OnInit {

  opcionesMetodoPago: string[]

  constructor() { 
    this.opcionesMetodoPago=["Tarjeta","Billetera Digital", "Monedero"]
  }

  ngOnInit(): void {
  }

}
