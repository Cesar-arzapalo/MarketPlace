import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario-sidebar',
  templateUrl: './usuario-sidebar.component.html',
  styleUrls: ['./usuario-sidebar.component.css']
})
export class UsuarioSidebarComponent implements OnInit {
  @Input() nombre!:string
  @Input() imagenURL!:string;

  constructor() { }

  ngOnInit(): void {
  }

}
