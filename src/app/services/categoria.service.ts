import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Categoria } from '../models/categoria.model';
import { CategoriaArbol } from '../models/categoriaArbol.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private categoriaColections!: AngularFirestoreCollection<Categoria>;
  public categorias: CategoriaArbol[];

  constructor(private store: AngularFirestore) {
    this.categorias = []
  }

  cargarCategorias() {
    this.categoriaColections = this.store.collection<Categoria>('categoria', ref => ref.orderBy('nombre', 'asc'));
    return this.categoriaColections.valueChanges()
      .pipe(map((arrayCategoria: any[]) => {
        arrayCategoria.map(categoria => {
          if (categoria.raiz) {
            this.categorias.push(this.cargarHijas(new CategoriaArbol(categoria.nombre, []), categoria))
            console.log(this.categorias)
          }
        })

      }));
  }

  cargarCategoria(idCategoria: string) {
    this.categoriaColections = this.store.collection<Categoria>('categoria', ref => ref.orderBy('nombre', 'asc'));
    console.log(this.categoriaColections.doc(idCategoria).get())
    return this.categoriaColections.doc(idCategoria).get();
  }

  cargarHijas(raiz: CategoriaArbol, raizReferecia: Categoria): CategoriaArbol {
    if (raizReferecia.idHijas.length !== 0) {
      raizReferecia.idHijas.map(referenciaHija => {
        this.cargarCategoria(referenciaHija).subscribe((categoria) => {
          if (categoria.exists) {
            raiz.categoriasHijas.push(this.cargarHijas(new CategoriaArbol(categoria.data()!.nombre,[]),categoria.data()!))
          }
        });
      })

    }
    return raiz
  }

  agregarCategoria(categoria: Categoria) {
    return this.categoriaColections.add({
      nombre: categoria.nombre,
      idHijas: categoria.idHijas
    });
  }

}
