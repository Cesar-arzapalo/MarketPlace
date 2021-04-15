import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Producto } from '../models/producto.models';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection  } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Categoria } from '../models/categoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private categoriaColections!: AngularFirestoreCollection<Categoria>;
  public categorias: Categoria[];


  constructor(private store: AngularFirestore) {
    this.categorias = []
   }

  cargarProductos(){
    this.categoriaColections = this.store.collection<Categoria>('categoria', ref => ref.orderBy('nombre', 'asc'));
    console.log(this.categoriaColections.valueChanges())
    return this.categoriaColections.valueChanges()
            .pipe(map((arrayCategoria: Categoria[]) => {
              console.log(1,arrayCategoria);
              this.categorias = arrayCategoria;
            }));
  }

  agregarProducto(cateogira: Categoria){
    return this.categoriaColections.add({
      id:cateogira.id,
      nombre: cateogira.nombre      
    });
  }

}
