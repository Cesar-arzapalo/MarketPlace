import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  opcionesPerfil:string[]; 
  constructor() { 
    this.opcionesPerfil=["Mis Datos","Historial de pedidos", "Direcciones"]
  }

  ngOnInit(): void {
  }

}
