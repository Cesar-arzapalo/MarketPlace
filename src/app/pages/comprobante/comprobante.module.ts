import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PipesModule } from '../../pipes/pipes.module';
import { ComprobanteComponent } from './comprobante.component';



@NgModule({
  declarations: [ComprobanteComponent],
  imports: [
    CommonModule,
    RouterModule,
    PipesModule
  ],
  exports:[
    ComprobanteComponent
  ]
})
export class ComprobanteModule { }
