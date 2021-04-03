import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  {path:"catalogo", loadChildren: () => import('./pages/catalogo/catalogo.module').then( m => m.CatalogoModule)},
  {path:"usuario",  loadChildren: () => import('./pages/usuario/usuario.module').then( m => m.UsuarioModule)},
  {path:"not-found",  component:NotFoundComponent},
  {path: "**", pathMatch:"full", redirectTo:"/catalogo"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
