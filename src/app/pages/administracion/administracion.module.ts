import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ProductosComponent } from './productos/productos.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { ComponentsModule } from '../../components/components.module';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    UsuariosComponent,
    ProductosComponent,
    CategoriasComponent,
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule,
    ComponentsModule,
    ReactiveFormsModule
  ]
})
export class AdministracionModule { }
