import { Component, OnInit } from '@angular/core';
import { Enlace as Enlace } from 'src/app/models/enlace.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  infoConsultas: Enlace[];
  informacionEmpresa: Enlace[];
  infoCallCenter: String[];
  informacionRedes: Enlace[];
  constructor() { 
    this.infoConsultas = [
      new Enlace("/","Beneficios"),new Enlace("/","Comó Comprar")
      ,new Enlace("/","Mis Pedidos"),new Enlace("/","Metodos de Pago")
      ,new Enlace("/","Servicio de Entrega"),new Enlace("/","Termios y condiciones")
      ,new Enlace("/","Politicas de Privacidad y Seguridad")
      ,new Enlace("/","Portocolos Covid")]
    this.informacionEmpresa = [
      new Enlace("/","Bienvenidos al EMARK"),new Enlace("/","Historia")
      ,new Enlace("/","Trabajo con Nosotros"),new Enlace("/","Ventas Corporativas")]
    this.infoCallCenter = ["(01) 340 9966","(01) 660 5853"]
    this.informacionRedes = [
      new Enlace("https://facebook.com","","",'fab fa-facebook'),
      new Enlace("https://twitter.com","","",'fab fa-twitter'),
      new Enlace("https://instagram.com","","",'fab fa-instagram'),
      new Enlace("https://youtube.com","","",'fab fa-youtube')]
  }

  ngOnInit(): void {
  }

}
