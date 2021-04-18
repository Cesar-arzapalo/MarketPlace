import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CorreoService {
  url:string = "https://mailnode-ruso.herokuapp.com/generar-boleta"
  constructor(private http:HttpClient) { 
    
  }

  enviarCorreo(dest:string,user:string,asunt:string,mns:string){
    this.http.post(this.url, {
      destinatario: dest,
      username: user,
      asunto: asunt,
      mensaje: mns
    }).pipe( map( (resp: any) => {
      console.log(resp);
      return resp.name;
    }));
  }


  /*destinatario
username
asunto
mensaje */
}
