import { Component, Input, OnInit } from '@angular/core';
import { OpcionSidebar} from '../../models/opcion-sidebar.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Input() opciones!: OpcionSidebar[];
  constructor() { 
  }

  ngOnInit(): void {

  }

}
