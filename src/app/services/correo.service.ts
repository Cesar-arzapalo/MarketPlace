import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CorreoService {
  url:string = "https://happycarperu.com/web_service/email_service/index.php";
  constructor(private http:HttpClient) { 
    
  }
  enviarCorreo(dest:string,user:string,asunt:string,mns:string){
    return this.http.post(this.url, {
      destinatario: dest,
      username: user,
      asunto: asunt,
      mensaje: mns
    });
  }


  /*destinatario
username
asunto
mensaje */
}
