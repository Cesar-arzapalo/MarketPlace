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
  public referenciasProductos:string[]; 


  constructor(private store: AngularFirestore, private authentication: AngularFireAuth) {
    this.productos = []
    this.referenciasProductos = []
   }

  cargarReferencias(){
    this.productosColections.ref.orderBy('nombre', 'asc').get().then(ref =>{
      ref.docs.map( doc => this.referenciasProductos.push(doc.id))
    } )  
  }
   

  cargarProductos(){
    this.productosColections = this.store.collection<Producto>('producto', ref => ref.orderBy('nombre', 'asc'));
    this. cargarReferencias();
    return this.productosColections.valueChanges()
            .pipe(map((arrayProductos: Producto[]) => {
              this.productos = arrayProductos;
              this.productos=this.productos.map<Producto>((producto:Producto,idx:number) => {producto.id=this.referenciasProductos[idx]; return producto})
            }));
  }

  cargarProducto(idProducto:string){
    this.productosColections = this.store.collection<Producto>('producto', ref => ref.orderBy('nombre', 'asc'));
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
