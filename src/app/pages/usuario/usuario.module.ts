import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { PerfilComponent } from './perfil/perfil.component';
import { Routes } from '@angular/router';
import { DatosComponent } from './perfil/datos/datos.component';
import { HistorialPedidosComponent } from './perfil/historial-pedidos/historial-pedidos.component';
import { DireccionesComponent } from './perfil/direcciones/direcciones.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [PerfilComponent, DatosComponent, HistorialPedidosComponent, DireccionesComponent, RegistroComponent, LoginComponent],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    ComponentsModule,
    ReactiveFormsModule
  ]
})
export class UsuarioModule { }
