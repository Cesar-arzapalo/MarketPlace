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
    this.productosColections = this.store.collection<Producto>('producto', ref => ref.orderBy('nombre', 'asc'));
    console.log(this.productosColections.valueChanges())
    return this.productosColections.valueChanges()
            .pipe(map((arrayProductos: Producto[]) => {
              console.log(1,arrayProductos);
              this.productos = arrayProductos;
            }));
  }

  cargarProducto(idProducto:string){
    this.productosColections = this.store.collection<Producto>('producto', ref => ref.orderBy('nombre', 'asc'));
    console.log(this.productosColections.doc(idProducto).get())
    return this.productosColections.doc(idProducto).get();
  }

  agregarProducto(producto: Producto){
    return this.productosColections.add({
      id:producto.id,
      nombre: producto.nombre,
      descripcion:producto.descripcion,
      valoracion: producto.valoracion,
      visitas: producto.visitas,
      idProveedor:producto.idProveedor,
      idCategoria: producto.idCategoria,
      stock: producto.stock,
      precioUnidad:producto.precioUnidad,
      medida: producto.medida,
      unidad: producto.unidad,
      imagenesRefereciales:producto.imagenesRefereciales,
      caracteristicas:producto.caracteristicas
    });
  }

}
