import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './productos/productos.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { AdministracionComponent } from './administracion.component';

const routes: Routes = [
  {path:"", component: AdministracionComponent},
  {path:"productos",component:ProductosComponent},
  {path:"usuarios",component:UsuariosComponent},
  {path:"categorias",component:CategoriasComponent},
  {path:"**",pathMatch:"full",redirectTo:"/not-found"}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
