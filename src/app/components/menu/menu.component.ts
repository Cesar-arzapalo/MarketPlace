import { Component, Input, OnInit } from '@angular/core';
import { CategoriaService } from '../../services/categoria.service';
import { CategoriaArbol } from 'src/app/models/categoriaArbol.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  categorias: CategoriaArbol[]=[];
  public  fontModal = false;
  
  constructor(private categoriaService:CategoriaService) {
    this.categoriaService.cargarCategorias().subscribe(()=>{
      this.categorias=this.categoriaService.categorias;
    })
  }

  ngOnInit(): void {
    
  }
  

}
