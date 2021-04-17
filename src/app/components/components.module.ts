import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaComponent } from './tabla/tabla.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BarraComponent } from './barra/barra.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';



@NgModule({
  declarations: [TablaComponent,BarraComponent, DetalleProductoComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[TablaComponent,BarraComponent]
})
export class ComponentsModule { }
