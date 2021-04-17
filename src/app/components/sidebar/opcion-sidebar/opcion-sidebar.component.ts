import { Component, Input, OnInit } from '@angular/core';
import { OpcionSidebar } from '../../../models/opcion-sidebar.model';

@Component({
  selector: 'app-opcion-sidebar',
  templateUrl: './opcion-sidebar.component.html',
  styleUrls: ['./opcion-sidebar.component.css']
})
export class OpcionSidebarComponent implements OnInit {
  @Input() opcion!:OpcionSidebar;
  constructor() { }

  ngOnInit(): void {
  }

}
