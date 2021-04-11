import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html',
  styleUrls: ['./barra.component.css']
})
export class BarraComponent implements OnInit {
  @Input() opciones!:string[];
  constructor() { }

  ngOnInit(): void {
  }
  

}
