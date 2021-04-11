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
import { VentaComponent } from './pages/venta/venta.component';
import { TipoRecepcionComponent } from './components/ventas/tipo-recepcion/tipo-recepcion.component';
import { MetodoPagoComponent } from './components/ventas/metodo-pago/metodo-pago.component';
import { TipoEntregaComponent } from './components/ventas/tipo-entrega/tipo-entrega.component';
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
    VentaComponent,
    TipoRecepcionComponent,
    MetodoPagoComponent,
    TipoEntregaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
    
  ],
  exports:[  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
