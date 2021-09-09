import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-tipo-recepcion',
  templateUrl: './tipo-recepcion.component.html',
  styleUrls: ['./tipo-recepcion.component.css']
})
export class TipoRecepcionComponent implements OnInit {
  opcionesTipoRecepcion:string[];
  opcionId:number=0;
  recepcionForm!: FormGroup;
  @Output() formularioEmitter: EventEmitter<FormGroup>;
  constructor(fb: FormBuilder, private authService:AuthService) { 
    this.opcionesTipoRecepcion=["Yo recepciono","Un conocido mio recepciona"],
    this.authService.user$.subscribe(perfil=>{

      this.recepcionForm = fb.group({
        nombres_completos:[(perfil)?(perfil?.name):"",[Validators.required]],
        dni:[0,[Validators.required,Validators.min(1000000),Validators.max(99999999)]],
        telefono:[0,[Validators.required,Validators.min(900000000),Validators.max(999999999)]],
        nombres_completos_otro_recepcionista!:['Dato',[Validators.required]],
        dni_otro_recepcionista:[99999999,[Validators.required,Validators.min(1000000),Validators.max(99999999)]],
        telefono_otro_recepcionista:[999999999,[Validators.required,Validators.min(900000000),Validators.max(999999999)]],
        otro_recepcionista:[false,[Validators.required]]
      })
      this.crearListener();
    })

    this.formularioEmitter = new EventEmitter<FormGroup>()
  }

  ngOnInit(): void {
    
  }

  crearListener(){
    this.recepcionForm.valueChanges.subscribe((valor) => {
    })

    this.recepcionForm.statusChanges.subscribe((status) => {
      if(status == "VALID"){
        this.formularioEmitter.emit(this.recepcionForm);
      }
    })
  }


  obtenerIdOpcion(idOpcion:number){
    this.recepcionForm.get("otro_recepcionista")?.setValue((idOpcion===0?false:true)) 
    if(idOpcion===1){
      this.recepcionForm.get("nombres_completos_otro_recepcionista")?.setValue("") 
      this.recepcionForm.get("dni_otro_recepcionista")?.setValue(undefined) 
      this.recepcionForm.get("telefono_otro_recepcionista")?.setValue(undefined) 
    }else{
      this.recepcionForm.get("nombres_completos_otro_recepcionista")?.setValue("Dato") 
      this.recepcionForm.get("dni_otro_recepcionista")?.setValue(99999999) 
      this.recepcionForm.get("telefono_otro_recepcionista")?.setValue(999999999) 
    }
    this.opcionId= idOpcion
  }

}
