import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';

const routes: Routes = [
  {path:"catalogo", component:CatalogoComponent},
  {path:"usuario",  loadChildren: () => import('./pages/usuario/usuario.module').then( m => m.UsuarioModule)},
  {path:"administracion",  loadChildren: () => import('./pages/administracion/administracion.module').then(m=>m.AdministracionModule)},
  {path:"not-found",  component:NotFoundComponent},
  {path: "**", pathMatch:"full", redirectTo:"/catalogo"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
