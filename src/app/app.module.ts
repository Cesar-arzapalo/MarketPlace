import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MenuComponent } from './components/menu/menu.component';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProductoComponent } from './components/producto/producto.component';
import { DetalleProductoComponent } from './pages/detalle-producto/detalle-producto.component';
import { AdministracionComponent } from './pages/administracion/administracion.component';

import {HttpClientModule} from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ComprobanteComponent } from './pages/comprobante/comprobante.component';
import { VentaModule } from './pages/venta/venta.module';
import { AuthService } from './services/auth.service';
import { AuthModule } from '@auth0/auth0-angular';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    MenuComponent,
    NavegacionComponent,
    CatalogoComponent,
    UsuarioComponent,
    NotFoundComponent,
    ProductoComponent,
    DetalleProductoComponent,
    AdministracionComponent,
    ComprobanteComponent,
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    VentaModule,
    AuthModule.forRoot({
      domain: 'evison.us.auth0.com',
      clientId: '0myVHs6gKKXzBsqx4LDE3DeWC9fa1rgi',
      cacheLocation:'localstorage',
      useRefreshTokens:true
    })
    
  ],
  exports:[  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
