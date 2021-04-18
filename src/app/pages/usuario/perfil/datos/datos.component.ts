import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent implements OnInit, OnDestroy {
  accountForm!: FormGroup; 
  subscriptions: Array<Subscription> = [];
  constructor() { }

  ngOnInit(): void {
    this.accountForm = new FormGroup({
      nombre: new FormControl('Cesar', [Validators.required]),
      apellidos: new FormControl('Arzapalo Caldas', [Validators.required]),
      fecha_nacimiento: new FormControl('', [Validators.required]),
      telefono: new FormControl('666666', [Validators.required]),
      tipo_documento: new FormControl('DNI', Validators.required),
      documento: new FormControl('75151515', [Validators.required]), 
      email: new FormControl('lolis@gmail.com', [Validators.email, Validators.required]),
    });
  }
  ngOnDestroy(){
    for(let subscription of this.subscriptions){
      subscription.unsubscribe();
    }
  }

}
