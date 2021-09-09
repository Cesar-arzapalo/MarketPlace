import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CorreoService {
  url:string = "https://happycarperu.com/web_service/email_service/index.php";
  headers:HttpHeaders = new HttpHeaders ({
    'Access-Control-Allow-Credentials' : 'true',
    'Access-Control-Allow-Origin': '*',
  });
  constructor(private http:HttpClient) { 
    
  }
  enviarCorreo(key:string,dest:string,user:string,asunt:string,mns:string){
    return this.http.get(`${this.url}?key=${key}&dest=${dest}&user=${user}&asunt=${asunt}&mns=${mns}`
    );
  }
}
