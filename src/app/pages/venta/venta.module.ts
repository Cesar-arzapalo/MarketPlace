import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VentaComponent } from './venta.component';
import { RouterModule } from '@angular/router';
import { EtapasVentaModule } from '../../components/etapas-venta/etapas-venta.module';



@NgModule({
  declarations: [VentaComponent],
  imports: [
    CommonModule,
    EtapasVentaModule,
    RouterModule
  ],
  exports:[VentaComponent]
})
export class VentaModule { }

