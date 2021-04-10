import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Producto } from '../models/producto.models';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  url = `${environment.backendCrudURL}/products`
  constructor(private http:HttpClient) { }

  getProductos = () =>{
    return this.http.get(this.url)
  }
  getProducto = (id:number) =>{
    return this.http.get(`${this.url}`)
  }
  insertarProducto = (producto: Producto) => {
    this.http.post(`${this.url}.json`,producto).pipe( map( (resp: any) => {
      console.log(resp);
      return resp.name;
    }));
  }
}
