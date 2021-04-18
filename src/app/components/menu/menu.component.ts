import { Component, Input, OnInit } from '@angular/core';
import { CategoriaService } from '../../services/categoria.service';
import { CategoriaArbol } from 'src/app/models/categoriaArbol.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  categorias: CategoriaArbol[]=[];
  public  fontModal = false;
  
  constructor(private categoriaService:CategoriaService, private route: Router ) {
    this.categoriaService.cargarCategorias().subscribe(()=>{
      this.categorias=this.categoriaService.categorias;
    })
  }

  ngOnInit(): void {
    
  }

  navegacion = (categoria:CategoriaArbol) => {
    console.log(this.obtenerPathRaiz(categoria.padre!,categoria.nombre))
    this.route.navigateByUrl(`/Catalogo/${ this.obtenerPathRaiz(categoria.padre!,categoria.nombre)}`).then()}

  obtenerPathRaiz = (categoria:CategoriaArbol, rutaHija: string):string => (categoria && categoria.padre)?this.obtenerPathRaiz(categoria.padre,`${categoria.nombre}/${rutaHija}`):(categoria)?`${categoria.nombre}/${rutaHija}`:rutaHija
    
  

}
