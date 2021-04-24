import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetodoPagoComponent } from './metodo-pago/metodo-pago.component';
import { TipoEntregaComponent } from './tipo-entrega/tipo-entrega.component';
import { TipoRecepcionComponent } from './tipo-recepcion/tipo-recepcion.component';
import { ComponentsModule } from '../components.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [MetodoPagoComponent,TipoEntregaComponent,TipoRecepcionComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    ReactiveFormsModule
  ],
  exports:[MetodoPagoComponent,TipoEntregaComponent,TipoRecepcionComponent]
})
export class EtapasVentaModule { }
