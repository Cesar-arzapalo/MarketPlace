import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaComponent } from './tabla/tabla.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BarraComponent } from './barra/barra.component';
import { CarroComponent } from './carro/carro.component';
import { MenuComponent } from './menu/menu.component';
import { ProductoCarroComponent } from './producto-carro/producto-carro.component';
import { PipesModule } from '../pipes/pipes.module';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';
import { ProductoBuscadorComponent } from './producto-buscador/producto-buscador.component';
import { RouterModule } from '@angular/router';
import { TablaCaracteristicasComponent } from './tabla-caracteristicas/tabla-caracteristicas.component';


//, AuthButtonComponent
@NgModule({
  declarations: [TablaComponent,BarraComponent, CarroComponent,MenuComponent, ProductoCarroComponent,  DetalleProductoComponent, ProductoBuscadorComponent, TablaCaracteristicasComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PipesModule,
    RouterModule
  ],
  exports:[TablaComponent,BarraComponent,MenuComponent,ProductoBuscadorComponent,TablaCaracteristicasComponent]
})
export class ComponentsModule { }
