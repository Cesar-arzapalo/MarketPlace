import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PerfilComponent } from './perfil/perfil.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  {path: 'perfil', pathMatch:'full', component: PerfilComponent},
  {path: 'registro', pathMatch:'full', component: RegistroComponent},
  {path: 'login', pathMatch:'full', component: LoginComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
