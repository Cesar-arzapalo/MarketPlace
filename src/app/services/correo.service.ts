import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CorreoService {
  url:string = "https://happycarperu.com/web_service/email_service/index.php";
  headers:HttpHeaders = new HttpHeaders ({'Access-Control-Allow-Origin': '*'});
  constructor(private http:HttpClient) { 
    
  }
  enviarCorreo(dest:string,user:string,asunt:string,mns:string){
    return this.http.post(this.url, {
      destinatario: dest,
      username: user,
      asunto: asunt,
      mensaje: mns
    },{headers: this.headers});
  }


  /*destinatario
username
asunto
mensaje */
}
