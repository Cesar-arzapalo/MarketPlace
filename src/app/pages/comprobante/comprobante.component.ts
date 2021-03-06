import { Component, OnInit } from '@angular/core';
import { CarroCompartidoService } from '../../services/carro-compartido.service';
import { Pedido } from '../../models/pedido.model';
import { CorreoService } from '../../services/correo.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

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
  }

  ngOnInit(): void {
  }

  async enviarCorreo(){

    const Toast = Swal.mixin({
      toast: true,
      title: 'Envio de comprobante',
      input: 'email',
    })
    const { value: email } = await Toast.fire({
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
      this.correoService.enviarCorreo(email,'User','Envio de boleta de pago - Emark','Gracias por comprar en Emark').toPromise().then( mns => {
        console.log(mns)
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
          title: (err.error.message)
        })
      })
    }
  }

}
