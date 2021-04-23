import { Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { ProductoSolicitado } from 'src/app/models/pedido.model';
import { Producto } from 'src/app/models/producto.models';
import { CarroCompartidoService } from 'src/app/services/carro-compartido.service';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  @ViewChild('results') results!:ElementRef;
  @ViewChild('header') header!:ElementRef;
  @ViewChild('fondo') fondo!:ElementRef;
  @ViewChild('fondo2') fondo2!:ElementRef;
  
  public producBuscados:Producto[]=[];
  public terminoBusc:string="";

  constructor(private router: Router,
              public auth: AuthService,
              private productoService:ProductoService) {
    
              
  }

  @HostListener('window:click', ['$event.target'])
  onClick(targetElement:any) {
    if(targetElement===this.header.nativeElement || targetElement===this.fondo.nativeElement || targetElement===this.fondo2.nativeElement){
      this.desaparecerResultados();
    }
    
  }

  ngOnInit(): void {
  
  }

  goToLink(url:any){
    this.router.navigate([url]);
  }

  buscarParcial(termino:string){
    termino=termino.trim();
    this.terminoBusc=termino;
    if(termino.length===0){
      this.producBuscados=[];
      this.desaparecerResultados();
      return;
    }
    this.obtenerProductoBuscado(termino);
    
    
  }

  obtenerProductoBuscado(termino:string) {
    this.productoService.cargarProductos().subscribe( () => {
      this.producBuscados = this.productoService.productos.filter( prod => prod.nombre.toLowerCase().includes(termino.toLowerCase()));
      //Para que se mencione que hay resultados
      this.aparecerResultados();

      // Para que no se mencione que no hay resultados
      // if(this.producBuscados.length>0){
      //   this.aparecerResultados();
      // }else {
      //   this.desaparecerResultados();
      // }
      
    });
  }

  aparecerResultados(){
    this.header.nativeElement.setAttribute('style','height: 100vh;background:rgba(0,0,0,0.3);');
    this.fondo.nativeElement.setAttribute('style','display:block;');
    this.results.nativeElement.setAttribute('style','display:block;');
  }

  desaparecerResultados(){
    this.header.nativeElement.setAttribute('style','height: auto;background:none');
    this.fondo.nativeElement.setAttribute('style','display:none;');
    this.results.nativeElement.setAttribute('style','display:none;');
  }




  buscarTotal(forma:NgForm){
    
    let termino:string= forma.controls.buscar.value;
    termino=termino.trim();
    if(termino.length===0){
      return;
    }
    this.desaparecerResultados();
    this.router.navigate(["/buscar",termino])
    

  }

  agregarProductoSoilicitado(product:ProductoSolicitado){
    CarroCompartidoService.getCarro().productos=CarroCompartidoService.getCarro().productos.filter( p => p.producto.nombre!= product.producto.nombre)
    CarroCompartidoService.getCarro().productos.push(product)
    CarroCompartidoService.actualizarMonto();
    console.log(CarroCompartidoService.getCarro());
  }

  irBuscar(){
    this.router.navigate(["/buscar",this.terminoBusc]);
    this.desaparecerResultados();
  }

}
