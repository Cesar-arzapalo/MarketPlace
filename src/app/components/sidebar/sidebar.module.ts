import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { OpcionSidebarComponent } from './opcion-sidebar/opcion-sidebar.component';
import { UsuarioSidebarComponent } from './usuario-sidebar/usuario-sidebar.component';



@NgModule({
  declarations: [SidebarComponent, OpcionSidebarComponent, UsuarioSidebarComponent],
  imports: [
    CommonModule
  ],
  exports:[SidebarComponent]
})
export class SidebarModule { }
