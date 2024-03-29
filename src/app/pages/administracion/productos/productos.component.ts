import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Campo } from 'src/app/models/objeto-tabla.model';
import { Producto } from 'src/app/models/producto.models';
import Swal from 'sweetalert2'
import { ProductoService } from '../../../services/producto.service';
import { Caracteristica } from '../../../models/producto.models';
import { CaracteristicaService } from '../../../services/caracteristica.service';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  camposImagenes: Campo[]
  camposCaracteristica: Campo[]
  productosForm: FormGroup

  constructor(private fb:FormBuilder, private productoService:ProductoService, private caracteristicaService:CaracteristicaService) { 
    console.log(12)
    this.camposImagenes=[new Campo("imagen","text")]
    this.camposCaracteristica=[new Campo("nombre","text"),new Campo("descripcion","text")]
    // this.productosForm=fb.group({});
    this.productosForm=fb.group({
      nombre: ['',[Validators.required,Validators.maxLength(30)]],
      descripcion:['',[Validators.required,Validators.maxLength(512)]],
      idCategoria:[0,[Validators.required,Validators.min(0),Validators.max(20)]],
      idProvedor:[0,[Validators.required,Validators.min(0)]],
      valoracion:[0,[Validators.required,Validators.min(0),Validators.max(99999)]],
      visitas:[0,[Validators.required,Validators.min(0)]],
      precio:[0,[Validators.required,Validators.min(0)]],
      stock:[0,[Validators.required,Validators.min(0)]],
      medida:['',[Validators.required,Validators.minLength(0),Validators.maxLength(30)]],
      unidad:['',[Validators.required,Validators.minLength(0),Validators.maxLength(30)]],
      caracteristicas:fb.array([]),
      imagenes:fb.array([])
    });
    this.productoService.cargarProductos().subscribe( () => console.log(this.productoService.productos,1));
    this.caracteristicaService.generarColeccionCaracteristica();
  }

  
  
  ngOnInit(): void {
    this.crearListener();
  }
  
  crearListener(){
    this.productosForm.valueChanges.subscribe((valor) => {
      console.log(valor);
    })

    this.productosForm.statusChanges.subscribe((status) => {
      console.log({status})
    })

    var formControlNombre=this.productosForm.get('nombre')
    
    if(formControlNombre){
      formControlNombre.valueChanges.subscribe(console.log);
    }
  }

  actualizarCaracteristicas(form:FormArray){
    this.productosForm.setControl("caracteristicas",form)
  }
  actualizarImagenes(form:FormArray){
    this.productosForm.setControl("imagenes",form)
  }

  anyadirProducto(){
    if(this.productosForm.invalid){
      Swal.fire({
        title:'Datos incorrectos y/o incompletos',
        icon:'error'
      })
      return;
    }
    Swal.fire({
      title:'Espere por favor...'
    })
    Swal.showLoading ()
    var caracteristicas:string[] =[]
    var caracteristicasPreprocesadas:Caracteristica[] =  this.productosForm.get("caracteristicas")?.value;
    caracteristicasPreprocesadas.map( async (caracteristicaPre: Caracteristica) =>{
      await this.caracteristicaService.agregarCaracteristica(caracteristicaPre).then(ref => {
        console.log(ref.id);
        caracteristicas.push(ref.id)
      })
      
    })

    var productoNuevo = new Producto(
      "1",this.productosForm.get("nombre")?.value,
      this.productosForm.get("descripcion")?.value,
      this.productosForm.get("valoracion")?.value,
      this.productosForm.get("visitas")?.value,
      this.productosForm.get("idProvedor")?.value,
      this.productosForm.get("idCategoria")?.value,
      this.productosForm.get("stock")?.value,
      this.productosForm.get("precio")?.value,
      this.productosForm.get("medida")?.value,
      this.productosForm.get("unidad")?.value,
      this.productosForm.get("imagenes")?.value,
      caracteristicas
    )
    console.log(productoNuevo);
    this.productoService.agregarProducto(productoNuevo).then( (ref) => {
      console.log(ref.id)
      Swal.fire({
        title:'Producto añadido',
        icon:'success'
      })
    })
    .catch( () => console.error('Mensaje no enviado'));
  }
}
