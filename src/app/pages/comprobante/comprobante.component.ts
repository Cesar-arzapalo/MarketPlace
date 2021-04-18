import { Component, OnInit } from '@angular/core';
import { CarroCompartidoService } from '../../services/carro-compartido.service';
import { Pedido } from '../../models/pedido.model';
import { CorreoService } from '../../services/correo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comprobante',
  templateUrl: './comprobante.component.html',
  styleUrls: ['./comprobante.component.css']
})
export class ComprobanteComponent implements OnInit {
  pedido: Pedido;
  monto: Number = CarroCompartidoService.getMonto();

  constructor(private router: Router, public correoService: CorreoService) { 
    this.pedido=CarroCompartidoService.carro;
    console.log(this.pedido)
    correoService.enviarCorreo("minorin.sayakan@gmail.com","User","Envio de boleta de pago - Emark","Gracias por comprar en Emark")
  }

  ngOnInit(): void {
  }

}
