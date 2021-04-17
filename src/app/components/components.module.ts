import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaComponent } from './tabla/tabla.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BarraComponent } from './barra/barra.component';
import { CarroComponent } from './carro/carro.component';
import { MenuComponent } from './menu/menu.component';
import { ProductoCarroComponent } from './producto-carro/producto-carro.component';
import { PipesModule } from '../pipes/pipes.module';



@NgModule({
  declarations: [TablaComponent,BarraComponent, CarroComponent,MenuComponent, ProductoCarroComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PipesModule
  ],
  exports:[TablaComponent,BarraComponent,MenuComponent]
})
export class ComponentsModule { }
