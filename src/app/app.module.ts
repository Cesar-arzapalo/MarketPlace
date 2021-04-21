import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
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
import { VentaModule } from './pages/venta/venta.module';
import { ComponentsModule } from './components/components.module';
import { ComprobanteModule } from './pages/comprobante/comprobante.module';
import { PipesModule } from './pipes/pipes.module';
import { AuthModule } from '@auth0/auth0-angular';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    NavegacionComponent,
    CatalogoComponent,
    UsuarioComponent,
    NotFoundComponent,
    ProductoComponent,
    DetalleProductoComponent,
    AdministracionComponent,
    BuscarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    VentaModule,
    ComprobanteModule,
    ComponentsModule,
    PipesModule,
    AuthModule.forRoot({
      domain: 'aptir.auth0.com',
      clientId: 'vT3PBjnZFRcgh3Ri5gHETKSQdOVxdaS9',
      cacheLocation:'localstorage',
      useRefreshTokens:true
    }),
    FormsModule
    
  ],
  exports:[  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
