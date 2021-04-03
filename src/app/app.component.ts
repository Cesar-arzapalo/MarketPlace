import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EMarket';
  ramaPrincipal: string;
  hoja: string;

  constructor () {
    this.ramaPrincipal = "";
    this.hoja = "";
  }

  public obtenerRamaPrincipal  = (rama: string) => this.ramaPrincipal = rama;
  public obtenerHoja  = (hoja: string) => this.ramaPrincipal = hoja;
}
