import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Producto } from '../models/producto.models';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection  } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  url = `${environment.backendCrudURL}/products`
  private productosColections!: AngularFirestoreCollection<Producto>;
  public productos: Producto[];


  constructor(private store: AngularFirestore, private authentication: AngularFireAuth) {
    this.productos = []
   }

  cargarProductos(){
    this.productosColections = this.store.collection<Producto>('producto', ref => ref.orderBy('nombre', 'asc').limitToLast(5));
    console.log(this.productosColections.valueChanges())
    return this.productosColections.valueChanges()
            .pipe(map((arrayProductos: Producto[]) => {
              console.log(1,arrayProductos);
              this.productos = arrayProductos;
            }));
  }

  agregarProducto(producto: Producto){
    return this.productosColections.add(producto);
  }

}
