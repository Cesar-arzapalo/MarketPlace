import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Producto, Caracteristica } from '../models/producto.models';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection  } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Categoria } from '../models/categoria.model';

@Injectable({
  providedIn: 'root'
})
export class CaracteristicaService {

  private caracteristicasColections!: AngularFirestoreCollection<Caracteristica>;


  constructor(private store: AngularFirestore) {
   }

   generarColeccionCaracteristica(){
    this.caracteristicasColections = this.store.collection<Caracteristica>('caracteristicas', ref => ref.orderBy('nombre', 'asc'));
   }

  cargarCaracteristica(idCaracteristica: string){
    this.caracteristicasColections = this.store.collection<Caracteristica>('caracteristicas', ref => ref.orderBy('nombre', 'asc'));
    console.log(this.caracteristicasColections.doc(idCaracteristica).get())
    return this.caracteristicasColections.doc(idCaracteristica).get().subscribe(caracteristica => {
        if (caracteristica.exists) {
            console.log(caracteristica.data());
            return caracteristica.data();
        } else {
            return 'la caracteristica no existe';
        }
    });
  }

  agregarCaracteristica(caracteristicas: Caracteristica){
    return this.caracteristicasColections.add({
      nombre: caracteristicas.nombre,
      descripcion: caracteristicas.descripcion     
    });
  }

}
