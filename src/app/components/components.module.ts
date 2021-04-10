import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaComponent } from './tabla/tabla.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [TablaComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[TablaComponent]
})
export class ComponentsModule { }
