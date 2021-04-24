import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-metodo-pago',
  templateUrl: './metodo-pago.component.html',
  styleUrls: ['./metodo-pago.component.css']
})
export class MetodoPagoComponent implements OnInit {

  opcionesMetodoPago: string[]
  opcionId:number = 0;
  pagoCredito: boolean = false;
  pagoForm: FormGroup;
  @Output() formularioEmitter: EventEmitter<FormGroup>;
  constructor(fb: FormBuilder) { 
    this.opcionesMetodoPago=["Tarjeta","Billetera Digital", "Monedero"];
    this.pagoForm = fb.group({
      nro_tarjeta:[10,[Validators.required,Validators.max(999999999999999),Validators.min(10^12)]],
      fecha_caducidad:['',[Validators.required]],
      ccv:['',[Validators.required]]
    })
    this.formularioEmitter = new EventEmitter<FormGroup>()
  }

  ngOnInit(): void {
    this.crearListener()
  }

  crearListener(){
    this.pagoForm.valueChanges.subscribe((valor) => {
      console.log(valor);
    })

    this.pagoForm.statusChanges.subscribe((status) => {
      console.log({status})
      if(status == "VALID"){
        console.log("holi")
        this.formularioEmitter.emit(this.pagoForm);
      }
    })
  }
  
  obtenerIdOpcion(idOpcion:number){
    console.log('tipo de entrega')
    console.log(this.opcionId,idOpcion)
    this.opcionId= idOpcion
    console.log(this.opcionId,idOpcion)
  }

}
