import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CorreoService {
  url:string = "https://happycarperu.com/web_service/email_service/index.php";
  headers:HttpHeaders = new HttpHeaders ({
    'Access-Control-Allow-Credentials' : 'true',
    'Access-Control-Allow-Origin': '*',
    // "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With,observe",
    // 'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE, PUT, OPTIONS'
  });
  constructor(private http:HttpClient) { 
    
  }
  enviarCorreo(dest:string,user:string,asunt:string,mns:string){
    console.log(`${this.url}?dest=${dest}&user=${user}&asunt=${asunt}&mns=${mns}`)
    return this.http.get(`${this.url}?dest=${dest}&user=${user}&asunt=${asunt}&mns=${mns}`
      //,{headers: this.headers}
    );
  }


  /*destinatario
username
asunto
mensaje */
}
