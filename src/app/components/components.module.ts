import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaComponent } from './tabla/tabla.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BarraComponent } from './barra/barra.component';



@NgModule({
  declarations: [TablaComponent,BarraComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[TablaComponent,BarraComponent]
})
export class ComponentsModule { }
