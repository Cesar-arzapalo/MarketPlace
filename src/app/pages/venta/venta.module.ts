import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VentaComponent } from './venta.component';
import { RouterModule } from '@angular/router';
import { EtapasVentaModule } from '../../components/etapas-venta/etapas-venta.module';
import { PipesModule } from '../../pipes/pipes.module';



@NgModule({
  declarations: [VentaComponent],
  imports: [
    CommonModule,
    EtapasVentaModule,
    RouterModule,
    PipesModule
  ],
  exports:[VentaComponent]
})
export class VentaModule { }

