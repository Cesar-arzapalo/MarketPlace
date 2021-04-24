import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-tipo-entrega',
  templateUrl: './tipo-entrega.component.html',
  styleUrls: ['./tipo-entrega.component.css']
})
export class TipoEntregaComponent implements OnInit {
  opcionesTipoEntrega:string[]; 
  opcionId: number=0;
  entregaForm:FormGroup;
  @Output() formularioEmitter: EventEmitter<FormGroup>;
  constructor(fb: FormBuilder) { 
    this.opcionesTipoEntrega=["Entrega a domicilio","Entrega en puntos autorizados"]
    this.entregaForm = fb.group({
      distrito:['Ate',[Validators.required]],
      codigo_postal:[0,[Validators.required]],
      direccion:['',[Validators.required]],
      tienda:['Ate',[Validators.required]],
      entregaDomicilio: [true,[Validators.required]] 
    })
    this.formularioEmitter = new EventEmitter<FormGroup>()
  }

  ngOnInit(): void {
    this.crearListener()
  }

  crearListener(){
    this.entregaForm.valueChanges.subscribe((valor) => {
      console.log(valor,this.entregaForm);
    })

    this.entregaForm.statusChanges.subscribe((status) => {
      console.log({status})
      if(status == "VALID"){
        console.log("holi")
        this.formularioEmitter.emit(this.entregaForm);
      }

    })
  }

  obtenerIdOpcion(idOpcion:number){
    console.log('tipo de entrega')
    
    this.entregaForm.get("entregaDomicilio")?.setValue((idOpcion===1?false:true)) 
    console.log(this.opcionId,idOpcion)
    this.opcionId= idOpcion
    console.log(this.opcionId,idOpcion)
  }

}
