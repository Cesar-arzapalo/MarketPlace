import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaComponent } from './tabla/tabla.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BarraComponent } from './barra/barra.component';
import { AuthButtonComponent } from './auth-button/auth-button.component';



@NgModule({
  declarations: [TablaComponent,BarraComponent, AuthButtonComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[TablaComponent,BarraComponent,AuthButtonComponent]
})
export class ComponentsModule { }
